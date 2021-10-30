import { useCallback, useState } from 'react';
import { useAsync } from 'react-async';

export interface InfiniteLoadProps<T> {
  initialItems?: T[];
  getItems: (cursor: string) => Promise<InfiniteLoadResult<T>>;
  initialCursor?: string;
  hasMore?: boolean;
}

export interface InfiniteLoadResult<T> {
  items: T[];
  cursor: string;
  hasMore: boolean;
}

export function useInfiniteLoad<T>({ getItems, ...props }: InfiniteLoadProps<T>) {
  const [items, setItems] = useState<T[]>(props.initialItems || []);
  const [cursor, setCursor] = useState<string|undefined>(props.initialCursor);
  const [hasMore, setHasMore] = useState<boolean>(props.hasMore !== false);

  const handleResolve = useCallback((data: InfiniteLoadResult<T>) => {
    setCursor(data.cursor);
    setItems(prev => [...prev, ...data.items]);
    setHasMore(data.hasMore);
  }, []);

  // @ts-ignore
  const { data: lastBatch, isPending, run } = useAsync({ deferFn: getItems, onResolve: handleResolve, });

  const loadMore = useCallback(() => {
    run(cursor);
  }, [cursor, run]);

  return {
    loadMore,
    items,
    cursor,
    hasMore,
    isPending
  }
}
