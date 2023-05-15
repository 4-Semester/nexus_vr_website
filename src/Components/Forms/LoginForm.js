import axios from "axios";
import { useState } from "react"

function LoginForm(){

    const [formData, setFormData] = useState({
        email: '',
        password:'',
    });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      
          axios.post('https://api.nexusvr.tech/login', {
              email: formData.email,
              password: formData.password
          }).then((response) => {
            console.log(response.headers.getAuthorization());
             localStorage.setItem('token', response.headers.getAuthorization());
             window.location.href = "/experiences";
          }).catch((error) => {
              console.log(error);
          });
  };


    return(
        <div class="flex h-screen items-center justify-center">
        <form onSubmit={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input onChange={handleChange} class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Enter email" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Password
            </label>
            <input onChange={handleChange} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="**********" />
          </div>
          <div class="flex items-center justify-between">
            <button class="btn btn-primary active:bg-on-primary focus:bg-primary" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
      
    )

}

export default LoginForm;