import { createContext, useState } from 'react';
import { AuthContextType } from './types';

export const AuthContextStore = createContext<AuthContextType>({
  userToken: localStorage.getItem('token') || null,
  userAccountname: localStorage.getItem('accountname') || null,
  setUserToken: () => {},
  setUserAccountname: () => {},
});
const AuthContext = ({ children }: { children: string }) => {
  const [userToken, setUserToken] = useState<string | null>(localStorage.getItem('token') || null);
  const [userAccountname, setUserAccountname] = useState<string | null>(localStorage.getItem('accountname') || null);

  return (
    <AuthContextStore.Provider value={{ userToken, setUserToken, userAccountname, setUserAccountname }}>
      {children}
    </AuthContextStore.Provider>
  );
};

export default AuthContext;
