import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-sm'>To Do List App</h1>
      <div className='block bg-red-300 border-white'>
        <label htmlFor="username">
          <h2>Username</h2>
          <input type="text" name='username'/>
        </label>
        <label htmlFor="password">
          <h2>Password</h2>
          <input type="text" name='password'/>
          </label>
        <button type='submit'>Login</button>
      </div>
    </>
  )
}

export default App
