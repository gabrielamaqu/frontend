import './home.css';
import { Product } from '../../utils/types';

type HomeProps = {
  listProducts: Product[];
  setListProductsCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

function Home({ listProducts, setListProductsCart }: HomeProps) {
// // função implementada só para passar no lint, caso não o setListProducts iria acusar, que foi chamado e nunca declarado. Apagar quando for criar outros requisitos
  const handleAddToCart = () => {
    const objToAdd : Product = {
      name: 'bola',
    };

    setListProductsCart((prevList) => [...prevList, objToAdd]);
  };

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
      {/* botão de teste para o carrinho */}
      <button onClick={ handleAddToCart }>ADD TO CAR</button>
    </div>
  );
}

export default Home;
