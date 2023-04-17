<<<<<<< HEAD
import { useState } from "react"

function LoginForm(){

    const [formData, setFormData] = useState({
        email: '',
        password:'',
    });


    return(
        <div class="flex h-screen items-center justify-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter email" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" />
          </div>
          <div class="flex items-center justify-between">
            <button class="btn btn-primary active:bg-on-primary focus:bg-primary" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
      
    )
=======
import { useState } from 'react';
import axios from 'axios';

function LoginForm (){
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.nexusvr.tech/login', {
                email: formData.email,
                password: formData.password
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='email' onChange={handleChange}></input>
            <input type='password' placeholder='password' onChange={handleChange}></input>
            <button type='submit'>Login</button>
        </form>
        </div>
    );
>>>>>>> daf44f3f3980be3548a9d80d23040162a0a6b1d0
}

export default LoginForm;