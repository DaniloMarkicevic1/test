export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''
        }`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''
        }`,
    },
  },

  app: {
    root: {
      path: '/',
      getHref: () => '/',
    },
    characters: {
      path: 'characters',
      getHref: () => '/characters',
    },
    character: {
      path: 'characters/:characterId',
    },
    location: {
      path: 'location/:locationId',
    },
    episode: {
      path: 'episode/:episodeId',
    },
  },
} as const;
