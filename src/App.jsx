import React from 'react'
import './App.css'
import Welcome from './WelcomePage/welcome'


const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row justify-center w-full mt-80 mx-auto border-2'>
        <div>
          <h1 className='my-auto mx-auto'>To Do List App</h1>
        </div>
        <div className='my-auto mx-auto'>
          <Welcome className=""/>
        </div>
      </div>
    </>
  )
}

export default App
