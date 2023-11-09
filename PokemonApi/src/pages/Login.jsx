import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <button>Register</button>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
