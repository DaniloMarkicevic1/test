import { api } from '@/lib/axios';
import {
  Episode,
  EpisodesDataRepsonse,
  EpisodesDataRequest,
} from '@/types/episode-types';

export async function getEpisodes({ episodesIds }: EpisodesDataRequest) {
  const response = await api.get<EpisodesDataRepsonse | Episode>(
    `/episode/${episodesIds}`,
  );

  return response.data;
}
