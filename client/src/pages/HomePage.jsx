import { signOut } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      signOut(auth);
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Halo dunia</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        dicta officia autem sequi molestiae maiores.
      </p>
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
}
