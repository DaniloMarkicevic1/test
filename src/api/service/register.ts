import { config } from '@/config/config';
import { AuthRequest } from '@/types/auth-types';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const register = async ({
  firebaseAuth,
  email,
  password,
}: AuthRequest) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    if (userCredential.user) {
      const user = userCredential.user;

      const userToken = await user.getIdToken();
      if (userToken) {
        localStorage.setItem(config.authTokenName, userToken);
      } else {
        localStorage.removeItem(config.authTokenName);
      }
    }
  } catch (error) {
    const typedError = error as FirebaseError;

    localStorage.removeItem(config.authTokenName);
    throw new Error(typedError.message);
  }
};
