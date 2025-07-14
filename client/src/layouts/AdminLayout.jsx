import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <>
      <header> --- Halaman Admin ---</header>
      <Outlet />
    </>
  );
}
