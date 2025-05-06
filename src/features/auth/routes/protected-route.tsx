import { paths } from '@/config/paths';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(paths.auth.login.getHref());
      return;
    }

    if (isLoggedIn && location.pathname === '/') {
      navigate(paths.app.characters.getHref());
      return;
    }
  }, []);

  if (!isLoggedIn) return null;

  return children;
};
