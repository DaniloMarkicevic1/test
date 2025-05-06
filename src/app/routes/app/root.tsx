import { Outlet } from 'react-router';

import { AppLayout } from '@/components/layouts/AppLayout';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export const ErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};

const AppRoot = () => {
  useDocumentTitle();
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default AppRoot;
