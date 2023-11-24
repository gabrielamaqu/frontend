import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Layout from './components/layout';

function App() {
  const [listProducts, setListProducts] = useState<[]>([]);
  const [listProductsCart, setListProductsCart] = useState<[]>([]);
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route
          index
          element={ <Home
            listProducts={ listProducts }
            setListProductsCart={ setListProductsCart } 
          /> }
        />
        <Route path="/cart" element={ <Cart listProductsCart={ listProductsCart } /> } />
      </Route>
    </Routes>
  );
}

export default App;
