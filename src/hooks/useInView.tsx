import { useCallback, useRef } from 'react';

export const useInView = (isInViewFn: () => void) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const isInViewRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          isInViewFn();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isInViewFn],
  );

  return { isInViewRef };
};
