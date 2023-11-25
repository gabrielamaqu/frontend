import './home.css';
import { useEffect, useState } from 'react';
import { Product } from '../../utils/types';
import { getCategories } from '../../services/api';

type HomeProps = {
  listProducts: Product[];
  setListProductsCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

function Home({ listProducts, setListProductsCart }: HomeProps) {
  const [categories, setCategories] = useState([]);

  // // função implementada só para passar no lint, caso não o setListProducts iria acusar, que foi chamado e nunca declarado. Apagar quando for criar outros requisitos
  const handleAddToCart = () => {
    const objToAdd : Product = {
      title: 'bola',
      id: 0,
      price: 0,
      thumbnail: '',
    };
    setListProductsCart((prevList) => [...prevList, objToAdd]);
  };

  // Chama a API de categorias
  const fetchCategoryList = async () => {
    try {
      const productsCategory = await getCategories();
      setCategories(productsCategory);
    } catch (error) {
      console.log('Erro ao buscar API categorias de produtos ', error);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  // Função para capturar o click na categoria
  const handleCategotyClick = () => {
    // espaço para criar rota para a pagina das categoria
  };

  return (
    <div className="home-page">
      { listProducts.length === 0 ? (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      ) : (
        <main>
          {listProducts.map((product) => (
            <div key={ product.id } data-testid="product">
              <img src={ product.thumbnail } alt={ product.title } />
              <h3>{ product.title }</h3>
              <span>
                Preço: R$
                { product.price }
              </span>
            </div>
          ))}
        </main>
      )}
      {/* botão de teste para o carrinho */}
      <button onClick={ handleAddToCart }>ADD TO CAR</button>

      <aside className="categories">
        <h3>Categorias</h3>
        <div>
          {categories.map((category: any) => (
            <button
              data-testid="category"
              onClick={ handleCategotyClick }
              key={ category.id }
            >
              {category.name}
            </button>
          ))}
        </div>
      </aside>

    </div>
  );
}

export default Home;
