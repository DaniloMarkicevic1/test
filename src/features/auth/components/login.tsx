import { AuthForm } from './auth-form';

import { useLogin } from '@/api/data/useLogin';

export const Login = () => {
  const { mutateAsync, error } = useLogin();

  return <AuthForm login={mutateAsync} authError={error} />;
};
