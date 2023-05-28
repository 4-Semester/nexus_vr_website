import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("https://api.nexusvr.tech/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.headers.getAuthorization());
        window.location.href = "/users";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex bg-neutral flex-col p-10 rounded-lg drop-shadow-xl">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="btn btn-primary active:bg-on-primary focus:bg-primary"
            onClick={() => handleSubmit()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
