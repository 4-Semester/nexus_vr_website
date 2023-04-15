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
}

export default LoginForm;