import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Layout from './components/layout';
import { Product } from './utils/types';

function App() {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listProductsCart, setListProductsCart] = useState<Product[]>([]);

  // // useEffect implementada só para passar no lint, caso não o setListProducts iria acusar, que foi chamado e nunca declarado. Apagar quando for criar outros requisitos
  useEffect(() => {
    const carregarLista = () => {
      setListProducts((prevList) => [...prevList]);
    };
    carregarLista();
  }, []);

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
