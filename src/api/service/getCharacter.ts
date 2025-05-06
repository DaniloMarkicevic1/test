import { api } from '@/lib/axios';
import { Character } from '@/types/characters-types';

export async function getCharacter(id: string[] | string) {
  const response = await api.get<Character | Character[]>(`/character/${id}`);

  return response.data;
}
