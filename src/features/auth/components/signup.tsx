import React from 'react';
import { AuthForm } from './auth-form';
import { useRegister } from '@/api/data/useRegister';

export const SignUp = () => {
  const { mutateAsync, error } = useRegister();

  return <AuthForm signup={mutateAsync} authError={error} />;
};
