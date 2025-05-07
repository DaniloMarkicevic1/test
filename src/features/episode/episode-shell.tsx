import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useParams } from 'react-router';
import { CharactersSection } from '@/components/ui/section/characters-section';
import { useCharacter } from '@/api/data/useCharacter';
import { useEffect, useState } from 'react';
import { useEpisodes } from '@/api/data/useEpisodes';
import { EpisodeCard } from '@/components/ui/card/episode-card';
import { Loader } from '@/components/ui/components/loader';

export const EpisodeShell = () => {
  const [residentArray, setResidentArray] = useState<string[] | string>('');
  const { episodeId = 0 } = useParams<{ episodeId: string }>();
  const {
    data,
    isLoading: episodeIsLoading,
    isFetching: episodeIsFetching,
  } = useEpisodes({ episodesIds: [+episodeId] });

  const {
    data: characters,
    isFetching: charactersIsFetching,
    isLoading: charactersIsLoading,
  } = useCharacter({
    charId: residentArray,
  });

  useEffect(() => {
    if (data) {
      const getCharArray = data[0].characters.map((character) => {
        return character.split('/').pop() || '';
      });
      setResidentArray(getCharArray);
    }

    return () => setResidentArray('');
  }, [data]);

  return (
    <Wrapper>
      {!episodeIsFetching || !episodeIsLoading ? (
        <EpisodeCard {...(data && { ...data[0] })} />
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
