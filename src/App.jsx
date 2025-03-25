import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Link } from "react-router";
import Welcome from './WelcomePage/welcome'
import Login from './WelcomePage/login'
import SignUp from './WelcomePage/signUp'
import Layout from './common/layout'
import ListBase from './Lists/list-base'

const App = () => {
  
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/list-index">Lists</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/list-index" element={<ListBase />} />   {/* Use element prop */}
          <Route path="/login" element={<Login />} />   {/* Use element prop */}
          <Route path="/signup" element={<SignUp />} />   {/* Use element prop */}
          <Route index element={<Welcome />} />      {/* Use element prop */}
          <Route path='/' element={<Layout />} />      {/* Use element prop */}
        </Routes>

      </Router>
  );
}

export default App
