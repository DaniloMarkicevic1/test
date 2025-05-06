import { apiURL } from './characters-types';

export interface EpisodesDataRequest {
  episodesIds: number[];
}
export type EpisodesDataRepsonse = Episode[];

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: apiURL<'character'>[];
  url: apiURL<'episode'>[];
  created: Date;
}
