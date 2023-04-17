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
}

export default LoginForm;