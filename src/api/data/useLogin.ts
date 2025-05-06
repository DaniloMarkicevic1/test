import { useAuthContext } from '@/hooks/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { login } from '../service/login';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { AuthFormData } from '@/types/auth-types';

export const useLogin = () => {
  const { firebaseAuth, setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['loginUser'],
    mutationFn: (request: AuthFormData) => login({ firebaseAuth, ...request }),
    onSuccess: () => {
      setIsLoggedIn(true);
      navigate(paths.app.characters.getHref(), {
        replace: true,
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
