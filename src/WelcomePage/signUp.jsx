import {React, useEffect, useState} from "react";

const signin = () => {
    
    const {signUpData} = axios.post('https://httpbin.org/post', {
        email: 'Fred',
        username: 'Flintstone',
        password: [1, 2, 3]
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    return (
        <>
            <h1 className='text-4xl'>Sign Up</h1>
            <label htmlFor="email">
                Email
                <input type="email" value="" placeholder="email"/>
            </label>
            <label htmlFor="username">
                Username
                <input type="text" value="" placeholder="username"/>
            </label>
            <label htmlFor="password">
                Password
                <input type="password" value="" placeholder="password"/>
            </label>
        </>
    )
}

export default signin;