import { queryConfig } from '@/lib/react-query-config';
import { AuthContextProvider } from '@/stores/auth/auth-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense, useState } from 'react';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center"></div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          {import.meta.env.DEV && (
            <ReactQueryDevtools buttonPosition="bottom-left" />
          )}
          {children}
        </AuthContextProvider>
      </QueryClientProvider>
    </Suspense>
  );
};
