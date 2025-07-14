import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header> --- Halaman Utama --- </header>
      <Outlet />
    </>
  );
}
