import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useDocumentTitle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const splitPathname = pathname.split('/');
    const capitalLetter = splitPathname[1].slice(0, 1).toUpperCase();

    const title = capitalLetter + splitPathname[1].slice(1);
    document.title = title;
  }, [pathname]);
};
