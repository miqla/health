import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleLogIn(e) {
    e.preventDefault();
    try {
      // caranya sama persis kayak register, cuma beda di bagian signInWithEmailAndPassword
      const userLoggedIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userLoggedIn);
      navigate("/");
    } catch (error) {
      const notify = () => toast(`${error.code} - ${error.message}`);
      notify();
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <h1>Login Page</h1>
      <form onSubmit={handleLogIn}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Login</button>
      </form>
    </>
  );
}
