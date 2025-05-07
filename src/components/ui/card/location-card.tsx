import { CharacterLocation } from '@/types/location-types';
import { formatDate } from '@/utils/utils';
import { NoDataText } from '../typography/no-data-text';

type Props = { location: CharacterLocation | undefined };

export const LocationCard = ({ location }: Props) => {
  if (!location) {
    return <NoDataText text="No Location Data Found" />;
  }

  return (
    <section className="flex flex-col items-center pb-5">
      <p className="font-bold pb-7">LOCATION: {location?.name}</p>
      <div className="flex flex-col text-start gap-2">
        <p>Dimension: {location?.dimension} </p>
        <p>Type: {location?.type} </p>
        <p>Created: {formatDate(location.created)} </p>
      </div>
    </section>
  );
};
