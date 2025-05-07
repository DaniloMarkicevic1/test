import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useCharacterLocation } from '@/api/data/useCharacterLocation';
import { LocationCard } from '@/components/ui/card/location-card';
import { useParams } from 'react-router';
import { CharactersSection } from '@/components/ui/section/characters-section';
import { useCharacter } from '@/api/data/useCharacter';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/ui/components/loader';

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

  return (
    <Wrapper>
      {!locationIsLoading || !locationIsFetching ? (
        <LocationCard location={data} />
      ) : (
        <Loader />
      )}

      <CharactersSection
        characters={characters}
        loading={charactersIsFetching || charactersIsLoading}
      />
    </Wrapper>
  );
};
