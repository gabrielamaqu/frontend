import './home.css';
import { Product } from '../../utils/types';

type HomeProps = {
  listProducts: Product[];
  setListProductsCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

function Home({ listProducts, setListProductsCart }: HomeProps) {
  // função implementada para teste ao clicar o botão e adicionar algo ao carrinho
  // const handleAddToCart = () => {
  //   setListProductsCart(['teste']);
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
      {/* botão de teste para o carrinho */}
      {/* <button onClick={ handleAddToCart }>ADD TO CAR</button> */}
    </div>
  );
}

export default Home;
