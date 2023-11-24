import { useState } from 'react';
import './home.css';

function Home() {
  // lista de produtos, ainda não temos o type da lista, após ter, colocar a tipagem no useState<Type[]>
  const [listProducts, setListProducts] = useState<[]>([]);

  return (
    <div className="home-page">
      <input className="input-home" type="text" />
      {listProducts.length === 0 ? (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      ) : (
        // Renderizar a lista de produtos quando não estiver vazia
        // Coloque aqui o código para renderizar a lista de produtos
        <h3>Lista com produtos</h3>
      )}
    </div>
  );
}

export default Home;
