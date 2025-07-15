export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </>
  );
}
