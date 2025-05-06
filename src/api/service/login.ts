import { config } from '@/config/config';
import { AuthRequest } from '@/types/auth-types';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const login = async ({ firebaseAuth, email, password }: AuthRequest) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    if (userCredential.user) {
      const user = userCredential.user;

      user
        .getIdToken()
        .then((value) => {
          localStorage.setItem(config.authTokenName, value);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem(config.authTokenName);
        });
    }
  } catch (error: unknown) {
    const typedError = error as FirebaseError;

    localStorage.removeItem(config.authTokenName);
    throw new Error(typedError.message);
  }
};
