import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  return <AuthContext value={1}>{children}</AuthContext>;
}
