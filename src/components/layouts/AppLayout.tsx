import { config } from '@/config/config';
import { useAuthContext } from '@/hooks/useAuthContext';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { LinkButton } from '../ui/button/link-button';
import { Button } from '../ui/button/button';

type Props = { children: ReactNode };

export const AppLayout = ({ children }: Props) => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();

  const onSuccess = () => {
    navigate('auth/login');
  };

  return (
    <div>
      <nav className="w-full flex justify-between px-5 py-3 bg-gray-700 fixed">
        <LinkButton to="/characters" text="Characters" />
        <Button
          text="Logout"
          onClick={() => {
            localStorage.removeItem(config.authTokenName);
            logout(onSuccess);
          }}
        />
      </nav>
      <main className="pt-20">{children}</main>
    </div>
  );
};
