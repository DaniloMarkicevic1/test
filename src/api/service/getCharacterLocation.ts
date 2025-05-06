import { api } from '@/lib/axios';
import {
  CharacterLocationRequest,
  CharacterLocationResponse,
} from '@/types/location-types';

export async function getCharacterLocation({
  locationId,
}: CharacterLocationRequest) {
  const response = await api.get<CharacterLocationResponse>(
    `/location/${locationId}`,
  );

  return response.data;
}
