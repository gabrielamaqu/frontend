import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart/index';
import Layout from './components/layout';
import { Product } from './utils/types';
import ProductDetail from './pages/product';

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
            setListProducts={ setListProducts }
          /> }
        />
        <Route path="/cart" element={ <Cart listProductsCart={ listProductsCart } /> } />
        <Route path="/product/:productId" element={ <ProductDetail /> } />
      </Route>
    </Routes>
  );
}

export default App;
