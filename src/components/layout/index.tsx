import { NavLink, Outlet } from 'react-router-dom';
import './layout.css';

function Layout() {
  return (
    <div className="container-layout">
      <div className="container-header">
        <input className="input-layout" type="text" />
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
