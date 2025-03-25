import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container"> {/* Example container */}
      {/* Your header, sidebar, or other layout elements go here */}
      <header>
        <h1>My App</h1>
        {/* Navigation links could go here */}
      </header>
      <main className="main-content">
        <Outlet /> {/* This is where the nested routes (Welcome, Login) will be rendered */}
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
};

export default Layout;