import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Layout from './components/layout';
import { Product } from './utils/types';

function App() {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [listProductsCart, setListProductsCart] = useState<Product[]>([]);

  // O Layout atualiza o setListProducts com os produtos correspondente a pesquisa do usuario e passa a informação para a home renderizar

  return (
    <Routes>
      <Route path="/" element={ <Layout setListProducts={ setListProducts } /> }>
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
