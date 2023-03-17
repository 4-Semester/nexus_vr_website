import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data (e.g., checking password and confirmPassword match)
    // ...

    try {
      const response = await axios.post('https://api.example.com/register', formData);
      console.log(response.data);
      // You can handle the response here (e.g., show a success message or redirect the user)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error (e.g., show an error message)
    }
  };

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

export default RegisterForm;
