import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { auth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        navigate("/");
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <header> --- Halaman Admin ---</header>
      <Outlet />
    </>
  );
}
