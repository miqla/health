import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState("ada");
  const value = { user, setUser };

  return <AuthContext value={value}>{children}</AuthContext>;
}
