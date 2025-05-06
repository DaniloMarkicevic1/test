import { apiURL } from './characters-types';

export type CharacterLocationResponse = CharacterLocation;
export interface CharacterLocationRequest {
  locationId: string;
}

export interface CharacterLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: apiURL<'character'>[];
  url: apiURL<'location'>;
  created: Date;
}
