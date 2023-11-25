import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';
import { useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../../services/api';

function Layout({ setListProducts }: any) {
  const [inputSearch, setInputSearch] = useState('');

  // Captura o input para a pesquisa
  const handleChange = (e: any) => {
    setInputSearch(e.target.value);
  };

  // Usa o input do usuario para fazer a requisição para a API
  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      const data = await getProductsFromCategoryAndQuery('MBL', inputSearch);
      if (data.results.length === 0) {
        setListProducts([]);
      } else {
        setListProducts(data.results);
      }
    } catch (error) {
      console.log('Erro ao buscar API de produtos ', error);
      setListProducts([]);
    }
  };

  return (
    <div className="container-layout">
      <div className="container-header">
        <div>
          <input
            id="searchInput"
            onChange={ handleChange }
            className="input-layout"
            type="text"
            data-testid="query-input"
          />
          <button onClick={ handleClick } data-testid="query-button">Pesquisar</button>
        </div>
        <header className="container-title-header">
          <h1>FRONT-END</h1>
          <p>Online store</p>
        </header>
        <NavLink
          data-testid="shopping-cart-button"
          to="/cart"
          className="navlink-car"
        >
          CARRINHO
        </NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
