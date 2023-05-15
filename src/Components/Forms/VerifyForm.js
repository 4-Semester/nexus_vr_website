import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

function VerifyForm(){
    const [params, setParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const token = params.get("token");

    useEffect(() => {
        if(!isLoaded){
            axios.post('https://api.nexusvr.tech/verify?token=' + token,
           ).then((response) => {
               console.log(response.data);
           }).catch((error) => {
               setError(error);
           }).finally(() => {
               setIsLoaded(true);
           });
        }
    }, []);

    params.forEach((value, key) => {
        console.log(key, typeof(value));
    });


    return (

        <div>
            {error && <div>Error: {error.message}</div>}
            {!isLoaded && <progress className="progress w-56"></progress>}
            {!error && isLoaded && <div>Account Verified</div>}
            {token}
        </div>


    );


}

export default VerifyForm;