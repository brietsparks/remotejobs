import { Knex } from 'knex';

export interface CursorPaginationParams<T extends string = string> {
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

export interface CursorPaginationOpts {
  appField: string;
  dbField: string;
  normalizeCursor?: (cursor: string) => any;
}

export class CursorPagination<T = unknown> {
  constructor(
    private params: CursorPaginationParams,
    private opts: CursorPaginationOpts
  ) {}

  async retrievePaginatedItems(query: Knex.QueryBuilder): Promise<CursorPaginationResult<T>> {
    this.applyTo(query);
    const items = await query;
    return this.getPaginatedItems(items);
  }

  applyTo(query: Knex.QueryBuilder) {
    // assuming all cursors sort descending
    // might not fit all use-cases
    const direction = 'desc';
    const comparator = '<';

    query
      .orderBy(this.opts.dbField, direction)
      .limit(this.params.limit + 1)

    if (this.params.cursor) {
      query.where(
        this.opts.dbField,
        comparator,
        this.normalizeCursor(this.params.cursor)
      );
    }
  }

  getPaginatedItems(retrievedItems: unknown[]): CursorPaginationResult<T> {
    if (retrievedItems.length === 0) {
      return {
        items: [],
        pagination: {
          hasMore: false,
          cursor: this.params.cursor
        }
      };
    }

    const returnableItems = [...retrievedItems];
    returnableItems.pop();

    if (!returnableItems.length) {
      return {
        items: [],
          pagination: {
            hasMore: false,
            cursor: this.params.cursor
          }
      }
    }

    return {
      items: returnableItems as T[],
      pagination: {
        hasMore: retrievedItems.length > this.params.limit,
        cursor: (returnableItems[returnableItems.length - 1] as any)[this.opts.appField]
      }
    };
  }

  private normalizeCursor(cursor: string) {
    const normalize = this.opts.normalizeCursor || ((cursor: string) => new Date(parseInt(cursor)));
    return normalize(cursor);
  }
}
