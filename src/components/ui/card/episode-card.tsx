import { Episode } from '@/types/episode-types';
import { formatDate } from '@/utils/utils';

export const EpisodeCard = ({
  name,
  air_date,
  characters,
  created,
  episode,
}: Episode) => {
  return (
    <div className="flex flex-col gap-10 items-center p-2 max-h-96">
      <p className="font-bold text-center">Episode: {episode}</p>
      <div className="flex flex-col flex-1/2 gap-3">
        <p>Episode Name: {name}</p>
        <p>Air date: {air_date}</p>
        <p>Added on: {formatDate(created)}</p>
        <p>Number of Characters: {characters.length}</p>
      </div>
    </div>
  );
};
