import { Character } from '@/types/characters-types';
import { NavLink } from 'react-router';
import { formatDate } from '@/utils/utils';

export const CharacterListCard = ({
  id,
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
    <NavLink
      to={`/characters/${id}`}
      className={`transition p-4 md:p-2 flex-col md:flex-row outline-gray-700 flex md:flex-1/1 lg:flex-1/3 2xl:flex-1/4 items-center rounded-md overflow-hidden gap-5 border border-cyan-900 hover:shadow-emerald-700 shadow-lg hover:outline-3 hover:outline-gray-700 hover:bg-gray-700`}
    >
      <img src={image} alt={'name'} className="rounded-md flex flex-1/5" />
      <div className="flex flex-col flex-1/3">
        <p>Name: {name}</p>
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Location: {location.name}</p>
        <p>Origin: {origin.name}</p>
        <p>Species: {species}</p>
        <p>Type: {type || '/'}</p>
        <p>Episodes: {episode.length} </p>
        <p>Added on: {formatDate(created)}</p>
      </div>
    </NavLink>
  );
};
