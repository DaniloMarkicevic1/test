import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import { ProtectedRoute } from '@/features/auth/routes/protected-route';

import { paths } from '@/config/paths';

import {
  default as AppRoot,
  ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: paths.auth.register.path,
      lazy: () => import('./routes/auth/register').then(convert(queryClient)),
      hydrateFallbackElement: <p>Loading Register page...</p>,
    },
    {
      path: paths.auth.login.path,
      lazy: () => import('./routes/auth/login').then(convert(queryClient)),
      hydrateFallbackElement: <p>Loading Login page...</p>,
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.characters.path,
          lazy: () =>
            import('./routes/app/characters').then(convert(queryClient)),
          hydrateFallbackElement: <p>Loading Characters page...</p>,
        },
        {
          path: paths.app.character.path,
          lazy: () =>
            import('./routes/app/character').then(convert(queryClient)),
          hydrateFallbackElement: <p>Loading Character page...</p>,
        },
        {
          path: paths.app.location.path,
          lazy: () =>
            import('./routes/app/location').then(convert(queryClient)),
          hydrateFallbackElement: <p>Loading Loaction page...</p>,
        },
        {
          path: paths.app.episode.path,
          lazy: () => import('./routes/app/episode').then(convert(queryClient)),
          hydrateFallbackElement: <p>Loading Episode page...</p>,
        },
      ],
    },
    {
      path: '*',
      lazy: () => import('./routes/404-not-found').then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
