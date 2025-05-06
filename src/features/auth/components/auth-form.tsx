import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/form/input';
import { Button } from '@/components/ui/button/button';
import { LinkButton } from '@/components/ui/button/link-button';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { ErrorText } from '@/components/ui/form/error';

const schema = z.object({
  password: z.string().min(6),
  email: z.string().email(),
});

type Schema = z.infer<typeof schema>;

type AsyncMutation = UseMutateAsyncFunction<
  void,
  Error,
  {
    email: string;
    password: string;
  },
  unknown
>;

type AuthFormProps = {
  login?: AsyncMutation;
  signup?: AsyncMutation;
  authError: Error | null;
};

export const AuthForm = ({ login, signup, authError }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = async ({ email, password }) => {
    if (signup) {
      await signup({ email, password });
    }

    if (login) {
      await login({ email, password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 border py-5 px-10 rounded-xl shadow-2xl shadow-black mt-6 sm:block"
    >
      <Input
        register={{ ...register('email') }}
        error={!!errors.email}
        errorText={errors.email?.message}
        placeholder="Email"
        type="email"
      />

      <Input
        register={{ ...register('password') }}
        placeholder="Password"
        error={!!errors.password}
        errorText={errors.password?.message}
        type="password"
      />

      {authError && authError.message.includes('email-already-in-use') ? (
        <ErrorText text="Email already in use" />
      ) : authError ? (
        <ErrorText text="Wrong Email or Password" />
      ) : null}
      <div className="flex justify-around pt-5">
        <Button
          disabled={isSubmitting}
          type="submit"
          text={signup ? 'Create Account' : 'Login'}
        />
        {login ? <LinkButton to="/auth/register" text="Sign Up" /> : null}
      </div>
    </form>
  );
};
