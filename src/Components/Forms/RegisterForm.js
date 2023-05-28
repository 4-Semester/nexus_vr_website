import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    try {
      const response = await axios.post("https://api.nexusvr.tech/register", {
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <form
        className="p-6 bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-2xl text-center font-bold text-gray-700">
          Register
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="w-full px-3 py-2 text-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:bg-blue-500"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
