import { initializeApp } from 'firebase/app';
import { PropsWithChildren, useState } from 'react';
import { AuthContext } from './auth-context';
import { getAuth, signOut } from 'firebase/auth';
import { config } from '@/config/config';
import { AuthContextType } from '@/types/auth-types';

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem(config.authTokenName);

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  // Initialize Firebase
  const app = initializeApp(config.firebaseConfig);

  const auth = getAuth(app);

  const logout = (onSuccessFn: () => void) => {
    signOut(auth)
      .then((value) => {
        console.log({ value });
        localStorage.removeItem(config.authTokenName);
        onSuccessFn();
      })
      .catch((err) => console.log({ err }));
  };

  const contextValue: AuthContextType = {
    firebaseAuth: auth,
    logout,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
