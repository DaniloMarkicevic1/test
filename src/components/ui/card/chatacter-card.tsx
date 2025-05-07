import { Character } from '@/types/characters-types';
import { formatDate } from '@/utils/utils';
import { NavLink } from 'react-router';

export const CharacterCard = ({
  name,
  status,
  image,
  gender,
  created,
  episode,
  location,
  origin,
  species,
  type,
}: Character) => {
  return (
    <>
      <p className="font-bold text-center pb-6">Character: {name}</p>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center p-2 md:max-h-96">
        <img
          src={image}
          alt={'name'}
          className="rounded-md overflow-hidden flex-1/3 max-w-96"
        />
        <div className="flex flex-col gap-3">
          <p>Status: {status}</p>
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>
            Location:{' '}
            <NavLink
              className={'text-blue-500'}
              to={'/location/' + location?.url?.split('/').pop()}
            >
              {location?.name}
            </NavLink>
          </p>
          <p>Origin: {origin.name}</p>
          <p>Type: {type || '/'}</p>
          <p>Number of Episodes Appeared In: {episode.length} </p>
          <p>Added on: {formatDate(created)}</p>
        </div>
      </div>
    </>
  );
};
