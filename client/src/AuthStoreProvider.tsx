import { ReactNode, createContext } from "react";
import AuthStore from "./AuthStore";

export interface AuthStoreProviderProps {
  children: ReactNode;
}

const authStore = new AuthStore();
export const AuthStoreContext = createContext(authStore);

const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
  return (
    <AuthStoreContext.Provider value={authStore}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export default AuthStoreProvider;
