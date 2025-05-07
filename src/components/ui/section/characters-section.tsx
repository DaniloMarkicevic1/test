import { useRef } from 'react';
import { CharacterListCard } from '../card/chatacter-list-card';
import { Character } from '@/types/characters-types';
import { NoDataText } from '../typography/no-data-text';
import { Loader } from '../components/loader';

type Props = {
  characters: Character[] | undefined;
  showScrollToTop?: boolean;
  loading?: boolean;
};

export const CharactersSection = ({
  characters,
  showScrollToTop,
  loading,
}: Props) => {
  const scrollToTopRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToTop = () => {
    scrollToTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="flex flex-wrap gap-4 scroll-mt-20 justify-center md:justify-normal"
      ref={scrollToTopRef}
    >
      {!characters && !loading ? <NoDataText /> : null}
      {characters?.map((item) => {
        return <CharacterListCard {...item} key={item.id} />;
      })}
      {loading && <Loader />}
      <div
        onClick={handleScrollToTop}
        className={`transition-opacity duration-500 fixed bottom-2 right-2 w-10 h-10 bg-black rounded-full flex justify-center items-center ${
          showScrollToTop ? 'opacity-100' : 'opacity-0'
        } `}
      >
        <div className="h-0 w-0 border-x-6 border-x-transparent border-b-[12px] border-white"></div>{' '}
      </div>
    </section>
  );
};
