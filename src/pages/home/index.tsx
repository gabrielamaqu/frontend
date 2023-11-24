import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './home.css';

type HomeProps = {
  listProducts: [];
  setListProductsCart: React.Dispatch<React.SetStateAction<[]>>;
};

function Home({ listProducts, setListProductsCart }: HomeProps) {
  // o tipo da lista de produtos no carrinho ainda não temos, após ter o ProductType, colocar a tipagem no useState<Type[]>

  // const handleAddToCart = () => {
  //   setListProductsCart([1]);
  // }

  return (
    <div className="home-page">
      {listProducts.length === 0 ? (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      ) : (
        // Renderizar a lista de produtos quando não estiver vazia
        // Coloque aqui o código para renderizar a lista de produtos
        // Apague este h3 abaixo após pegar a lista
        <h3>Lista com produtos</h3>
      )}
      {/* <button onClick={ handleAddToCart }>ADD TO CAR</button> */}
    </div>
  );
}

export default Home;
