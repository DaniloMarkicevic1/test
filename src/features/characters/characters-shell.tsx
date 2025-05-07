import { useCharacters } from '@/api/data/useCharacters';
import { SearchBox } from '@/components/ui/form/search-box';
import { CharactersSection } from '@/components/ui/section/characters-section';
import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { useInView } from '@/hooks/useInView';
import { UIEvent, useEffect, useState } from 'react';

export const CharactersShell = () => {
  const [search, setSearch] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const { data, fetchNextPage, isLoading, isFetching } = useCharacters({
    search: debouncedValue,
  });

  const { isInViewRef } = useInView(fetchNextPage);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(search);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleScroll = (e: UIEvent) => {
    if (e.currentTarget.scrollTop > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  return (
    <Wrapper onScroll={handleScroll}>
      <SearchBox onChange={handleSearch} />

      <CharactersSection
        loading={isLoading || isFetching}
        showScrollToTop={showScrollToTop}
        characters={data?.pages
          .map((items) => items.results.map((character) => character))
          .flat()}
      />
      {(!isLoading || !isFetching) && data ? <div ref={isInViewRef} /> : null}
    </Wrapper>
  );
};
