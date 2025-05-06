import { useQuery } from '@tanstack/react-query';

import { useAuthContext } from '@/hooks/useAuthContext';
import { getCharacter } from '../service/getCharacter';

export function useCharacter({ charId = '' }: { charId: string[] | string }) {
  const { isLoggedIn } = useAuthContext();

  const isEnabled = !!charId || !!charId.length;

  return useQuery({
    queryKey: ['character', charId],
    queryFn: () => getCharacter(charId),
    enabled: isLoggedIn && isEnabled,
    select: (data) => {
      const returnData = !Array.isArray(data) ? [data] : data;
      return returnData;
    },
  });
}
