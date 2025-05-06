import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useCharacterLocation } from '@/api/data/useCharacterLocation';
import { LocationCard } from '@/components/ui/card/location-card';
import { useParams } from 'react-router';
import { CharactersSection } from '@/components/ui/section/characters-section';
import { useCharacter } from '@/api/data/useCharacter';
import { useEffect, useState } from 'react';

export const LocationShell = () => {
  const [residentArray, setResidentArray] = useState<string[] | string>('');
  const { locationId = '' } = useParams<{ locationId: string }>();
  const {
    data,
    isLoading: locationIsLoading,
    isFetching: locationIsFetching,
  } = useCharacterLocation({ locationId });

  const {
    data: characters,
    isFetching: charactersIsFetching,
    isLoading: charactersIsLoading,
  } = useCharacter({
    charId: residentArray,
  });

  useEffect(() => {
    if (data) {
      const getCharArray = data?.residents.map(
        (resident) => resident.split('/').pop() || '',
      );
      setResidentArray(getCharArray);
    }

    return () => setResidentArray('');
  }, [data]);

  if (!data) return null;
  if (!characters) return null;

  return (
    <Wrapper>
      {!locationIsLoading || !locationIsFetching ? (
        <LocationCard location={data} />
      ) : null}
      {characters && (!charactersIsFetching || !charactersIsLoading) ? (
        <CharactersSection characters={characters} />
      ) : (
        <p>Loading Characters...</p>
      )}
    </Wrapper>
  );
};
