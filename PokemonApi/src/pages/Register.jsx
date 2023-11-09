import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePath = () => {
    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <h1>Register</h1>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
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
        <div className="flex w-full">
          <button onClick={handlePath}>Log in</button>
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
