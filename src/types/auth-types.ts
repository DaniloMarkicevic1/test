import { Auth } from 'firebase/auth';

export interface AuthContextType {
  logout: (onSuccessFn: () => void) => void;
  setIsLoggedIn: (value: boolean) => void;
  firebaseAuth: Auth;
  isLoggedIn: boolean;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthRequest extends AuthFormData {
  firebaseAuth: Auth;
}
