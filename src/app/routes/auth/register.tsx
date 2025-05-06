import { AuthLayout } from '@/components/layouts/AuthLayout';
import { SignUp } from '@/features/auth/components/signup';

const RegisterRoute = () => {
  return (
    <AuthLayout title="Register your account">
      <SignUp />
    </AuthLayout>
  );
};

export default RegisterRoute;
