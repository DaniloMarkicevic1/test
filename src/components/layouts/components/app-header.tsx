import { Button } from '@/components/ui/button/button';
import { LinkButton } from '@/components/ui/button/link-button';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useNavigate } from 'react-router';

export const AppHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const onSuccess = () => {
    navigate('auth/login', { replace: true });
  };

  return (
    <nav className="w-full flex justify-between px-5 py-3 bg-gray-700 fixed">
      <LinkButton to="/characters" text="Characters" />
      <Button
        text="Logout"
        onClick={() => {
          logout(onSuccess);
        }}
      />
    </nav>
  );
};
