import { api } from '@/lib/axios';
import {
  CharactersDataRepsonse,
  CharactersDataRequest,
} from '@/types/characters-types';

export async function getCharacters({
  pageParam,
  search,
}: CharactersDataRequest) {
  const response = await api.get<CharactersDataRepsonse>(`/character/`, {
    params: { page: pageParam, name: search },
  });

  return response.data;
}
