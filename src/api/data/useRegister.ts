import { useAuthContext } from '@/hooks/useAuthContext';
import { useMutation } from '@tanstack/react-query';
import { register } from '../service/register';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';

export const useRegister = () => {
  const { firebaseAuth, setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ['registerUser'],
    mutationFn: (request: { email: string; password: string }) =>
      register({ firebaseAuth, ...request }),
    onSuccess: () => {
      console.log('success');
      setIsLoggedIn(true);
      navigate(paths.app.characters.getHref(), {
        replace: true,
      });
    },
  });
};
