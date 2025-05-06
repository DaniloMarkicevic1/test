import { useCharacters } from '@/api/data/useCharacters';
import { SearchBox } from '@/components/ui/form/search-box';
import { CharactersSection } from '@/components/ui/section/characters-section';
import { Wrapper } from '@/components/ui/wrapper/wrapper';
import { UIEvent, useCallback, useEffect, useRef, useState } from 'react';

export const CharactersShell = () => {
  const [search, setSearch] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const { data, fetchNextPage, isLoading, isFetching } = useCharacters({
    search: debouncedValue,
  });

  const observer = useRef<IntersectionObserver | null>(null);
  const isInViewRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching) {
        return;
      }

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, isFetching],
  );

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

  if (!data) return;

  return (
    <Wrapper onScroll={handleScroll}>
      <SearchBox onChange={handleSearch} />
      <CharactersSection
        showScrollToTop={showScrollToTop}
        characters={data?.pages
          .map((items) => items.results.map((character) => character))
          .flat()}
      />
      {isLoading || isFetching ? <p>Loading...</p> : null}
      {!isLoading || !isFetching ? <div ref={isInViewRef} /> : null}
    </Wrapper>
  );
};
