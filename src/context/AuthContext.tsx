import { createContext, useState } from 'react';

export type AuthContextType = {
  userToken: string | null;
  userAccountname: string | null;
  setUserToken: (token: string | null) => void;
  setUserAccountname: (accountname: string | null) => void;
};

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
