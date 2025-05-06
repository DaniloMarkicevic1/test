import { useQuery } from '@tanstack/react-query';

import { useAuthContext } from '@/hooks/useAuthContext';
import { getEpisodes } from '../service/getEpisodes';
import { EpisodesDataRequest } from '@/types/episode-types';

export function useEpisodes({ episodesIds }: EpisodesDataRequest) {
  const { isLoggedIn } = useAuthContext();

  return useQuery({
    queryKey: ['episodes', episodesIds],
    queryFn: () => getEpisodes({ episodesIds }),
    enabled: isLoggedIn && !!episodesIds.length,
    select: (data) => {
      const returnData = Array.isArray(data) ? data : [data];
      return returnData;
    },
  });
}
