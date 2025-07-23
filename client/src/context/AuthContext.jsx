import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState("ada");
  const value = { user, setUser };
  const [isLoadPage, setLoadPage] = useState(true);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoadPage(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  if (isLoadPage) {
    return <div>Loading...</div>;
  }

  return <AuthContext value={value}>{children}</AuthContext>;
}
