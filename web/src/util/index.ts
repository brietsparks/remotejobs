export interface CursorPaginationResult<T> {
  items: T[];
  cursor: string;
  hasMore: boolean;
}
