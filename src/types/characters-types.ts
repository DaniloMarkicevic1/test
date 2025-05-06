export interface CharactersDataRepsonse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface CharactersDataRequest {
  pageParam: number;
  search: string;
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: apiURL<'location'>;
  };
  location: {
    name: string;
    url: apiURL<'location'>;
  };
  image: imageUrl;
  episode: apiURL<'episode'>[];
  url: apiURL<'character'>;
  created: Date;
}

export type Gender = 'Male' | 'Female' | 'Genderless' | 'unknown';
export type Status = 'Alive' | 'Dead' | 'unknown';

export type apiURL<T extends 'episode' | 'character' | 'location'> =
  `https://rickandmortyapi.com/api/${T}/${number}`;

export type imageUrl =
  `https://rickandmortyapi.com/api/character/avatar/${number}.jpeg`;
