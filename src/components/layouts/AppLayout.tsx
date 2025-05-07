import { ReactNode } from 'react';
import { AppHeader } from './components/app-header';

type Props = { children: ReactNode };

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <AppHeader />
      <main className="pt-20">{children}</main>
    </div>
  );
};
