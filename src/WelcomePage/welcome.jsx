import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const welcome = () => {
    const [message, setMessage] = useState('');
    
      useEffect(() => {
        fetch('http://localhost:3000/auth/getMsg')  
          .then((response) => response.json())
          .then((data) => setMessage(data.message))
          .catch((error) => console.error('Error:', error));
      }, []);
    return (
        <>
            <h1>{message}</h1>
            <div className="flex flex-row mt-40 border-2 border-white">
                <div className="w-1/2 my-auto">
                    <h1 className="text-4xl">APP</h1>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <button type='submit' className='bg-purple-100 p-1 text-slate-900'>
                        <Link to="/signUp">
                        Sign Up
                        </Link>
                    </button>
                    <button type='submit' className="bg-purple-100 p-1 text-slate-900">
                        <Link to='/login'>
                            Log In
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default welcome