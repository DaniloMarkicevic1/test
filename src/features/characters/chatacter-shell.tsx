import { useCharacter } from '@/api/data/useCharacter';
import { CharacterCard } from '@/components/ui/card/chatacter-card';
import { Loader } from '@/components/ui/components/loader';
import { EpisodesSection } from '@/components/ui/section/episodes-section';
import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useParams } from 'react-router';

export const CharacterShell = () => {
  const params = useParams<{ characterId: string }>();
  const { data, isLoading } = useCharacter({
    charId: params.characterId || '',
  });

  return (
    <Wrapper>
      {data && !isLoading ? (
        <>
          <CharacterCard {...data[0]} />
          <EpisodesSection episodes={data[0]?.episode} />
        </>
      ) : null}
      {isLoading ? <Loader /> : null}
    </Wrapper>
  );
};
