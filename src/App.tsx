import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      {/* {Se encontra no src/pages} */}
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  );
}

export default App;
