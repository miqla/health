import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user, "homepage");

  return (
    <>
      <h1 className="font-bold text-3xl">Halo dunia</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        dicta officia autem sequi molestiae maiores.
      </p>
    </>
  );
}
