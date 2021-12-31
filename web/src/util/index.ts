export interface CursorPaginationResult<T> {
  items: T[];
  pagination: {
    cursor?: string;
    hasMore: boolean;
  }
}
