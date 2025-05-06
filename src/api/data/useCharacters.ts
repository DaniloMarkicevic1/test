import { useInfiniteQuery } from '@tanstack/react-query';
import { getCharacters } from '../service/getCharacters';
import { useAuthContext } from '@/hooks/useAuthContext';

export function useCharacters({ search }: { search: string }) {
  const { isLoggedIn } = useAuthContext();

  return useInfiniteQuery({
    queryKey: ['characters', search],
    queryFn: ({ pageParam }) => getCharacters({ pageParam, search }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage?.info?.next
        ? +lastPage?.info?.next?.split('=')[1]
        : undefined;

      if (nextPage && lastPage.info.pages <= nextPage) return undefined;

      return nextPage;
    },
    enabled: isLoggedIn,
  });
}
