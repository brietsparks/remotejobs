import { Knex } from 'knex';

export interface CursorPaginationParams {
  cursor?: string;
  limit: number;
}

export interface CursorPaginationResult<T> {
  items: T[];
  pagination: {
    cursor?: string;
    hasMore: boolean;
  }
}

export interface CursorPaginationOpts<T> {
  getCursor: (entity: T) => string;
  cursorColumn: string;
  normalizeCursor?: (cursor: string) => any;
}

export class CursorPagination<T> {
  constructor(
    private params: CursorPaginationParams,
    private opts: CursorPaginationOpts<T>
  ) {}

  async retrievePaginatedItems(query: Knex.QueryBuilder): Promise<CursorPaginationResult<T>> {
    this.applyTo(query);
    const items = await query;
    return this.getPaginatedItems(items);
  }

  applyTo(query: Knex.QueryBuilder) {
    // assuming all cursors sort descending; doesn't fit all use-cases in the real world
    const direction = 'desc';
    const comparator = '<=';

    query
      .orderBy(this.opts.cursorColumn, direction)
      .limit(this.params.limit + 1)

    if (this.params.cursor) {
      query.where(
        this.opts.cursorColumn,
        comparator,
        this.normalizeCursor(this.params.cursor)
      );
    }
  }

  getPaginatedItems(retrievedItems: T[]): CursorPaginationResult<T> {
    if (retrievedItems.length === 0) {
      return {
        items: [],
        pagination: {
          hasMore: false,
          cursor: this.params.cursor
        }
      };
    }

    if (retrievedItems.length <= this.params.limit) {
      return {
        items: retrievedItems,
        pagination: {
          hasMore: false,
          cursor: this.opts.getCursor(retrievedItems[retrievedItems.length - 1])
        }
      }
    }

    const hasMore = retrievedItems.length > this.params.limit;

    const returnableItems = [...retrievedItems];
    returnableItems.pop();
    const cursor = this.opts.getCursor(returnableItems[returnableItems.length - 1]);

    return {
      items: returnableItems,
      pagination: {
        hasMore,
        cursor
      }
    };
  }

  private normalizeCursor(cursor: string) {
    const normalize = this.opts.normalizeCursor || ((cursor: string) => new Date(parseInt(cursor)));
    return normalize(cursor);
  }
}
