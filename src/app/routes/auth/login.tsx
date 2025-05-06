import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Login } from '@/features/auth/components/login';

const LoginRoute = () => {
  return (
    <AuthLayout title="Log in to your account">
      <Login />
    </AuthLayout>
  );
};

export default LoginRoute;
