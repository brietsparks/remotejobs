import { useCallback, useState } from 'react';
import { useAsync } from 'react-async';

import { CursorPaginationResult } from '../util';

export type InfiniteLoadProps<T> =
  Partial<CursorPaginationResult<T>> & {
  getItems: (cursor?: string) => Promise<CursorPaginationResult<T>>;
}

export function useInfiniteLoad<T>({ getItems, ...props }: InfiniteLoadProps<T>) {
  const [items, setItems] = useState<T[]>(props.items || []);
  const [cursor, setCursor] = useState<string|undefined>(props.pagination?.cursor);
  const [hasMore, setHasMore] = useState<boolean>(props.pagination?.hasMore !== false);

  const handleResolve = useCallback((data: CursorPaginationResult<T>) => {
    setCursor(data.pagination.cursor);
    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.pagination.hasMore);
  }, []);

  const deferFn = useCallback(() => getItems(cursor), [getItems, cursor]);
  const { isPending, isRejected, run } = useAsync({ deferFn, onResolve: handleResolve, });

  const loadMore = useCallback(() => {
    run(cursor);
  }, [cursor, run]);

  return {
    loadMore,
    items,
    cursor,
    hasMore,
    isPending,
    isRejected
  };
}
