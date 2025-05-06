import { config } from '@/config/config';
import { ReactNode, useEffect } from 'react';
type Props = { title: string; children: ReactNode };

export const AuthLayout = ({ children, title }: Props) => {
  useEffect(() => {
    localStorage.removeItem(config.authTokenName);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-auto py-7 h-[100vh]">
      <h1 className="text-xl">{title}</h1>
      {children}
    </div>
  );
};
