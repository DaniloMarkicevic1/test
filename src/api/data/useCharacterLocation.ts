import { useQuery } from '@tanstack/react-query';

import { useAuthContext } from '@/hooks/useAuthContext';
import { getCharacterLocation } from '../service/getCharacterLocation';
import { CharacterLocationRequest } from '@/types/location-types';

export function useCharacterLocation({ locationId }: CharacterLocationRequest) {
  const { isLoggedIn } = useAuthContext();

  return useQuery({
    queryKey: ['location', locationId],
    queryFn: () => getCharacterLocation({ locationId }),
    enabled: isLoggedIn && !!locationId,
  });
}
