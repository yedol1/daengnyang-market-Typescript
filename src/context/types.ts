export interface AuthContextType {
  userToken: string | null;
  userAccountname: string | null;
  setUserToken: (token: string | null) => void;
  setUserAccountname: (accountname: string | null) => void;
}
