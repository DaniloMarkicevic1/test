import { useCharacter } from '@/api/data/useCharacter';
import { CharacterCard } from '@/components/ui/card/chatacter-card';
import { EpisodesSection } from '@/components/ui/section/episodes-section';
import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useParams } from 'react-router';

export const CharacterShell = () => {
  const params = useParams<{ characterId: string }>();
  const { data, isLoading } = useCharacter({
    charId: params.characterId || '',
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <Wrapper>
      {data ? <CharacterCard {...data[0]} /> : null}
      {data ? <EpisodesSection episodes={data[0]?.episode} /> : null}
    </Wrapper>
  );
};
