import { Outlet, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
      } else {
        // User is signed out
        navigate("/auth");
      }
    });
  }, []);

  return (
    <>
      <header> --- Halaman Utama --- </header>
      <Outlet />
    </>
  );
}
