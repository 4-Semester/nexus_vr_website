import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // Her skal vi sende dataen til vores backend

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Brugernavn:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Registrer</button>
    </form>
  );
  }
}