import React from "react";

const login = () => {
    // useEffect(() => {
    //             fetch('http://localhost:3000/auth/login')  
    //               .then((response) => response.json())
    //               .then((data) => setMessage(data.message))
    //               .catch((error) => console.error('Error:', error));
    //           }, []);
    return (
        <>
            <h1>login</h1>
            <form action="" className="mx-auto border-2 border-red-900">
                <label htmlFor="username" className="flex flex-row gap-3">
                    Username
                    <input type="text" placeholder="username"/>
                </label>
                <label htmlFor="password" className="flex flex-row gap-3">
                    Password
                    <input type="password" placeholder="password"/>
                </label>
            </form>
            <button type='submit' className="bg-red-300 p-1">Login</button>
        </>
    )
}

export default login;