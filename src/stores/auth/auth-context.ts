import { AuthContextType } from '@/types/auth-types';
import { createContext } from 'react';

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
