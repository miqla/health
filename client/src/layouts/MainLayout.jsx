import { Outlet, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  const [isLoadPage, setLoadPage] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        navigate("/auth");
      }
      setLoadPage(false);
    });
  }, []);

  if (isLoadPage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header> --- Halaman Utama --- </header>
      <Outlet />
    </>
  );
}
