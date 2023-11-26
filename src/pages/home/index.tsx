import './home.css';
import { useEffect, useState } from 'react';
import { Product } from '../../utils/types';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

type HomeProps = {
  listProducts: Product[];
  setListProductsCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setListProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

function Home({ listProducts, setListProducts, setListProductsCart }: HomeProps) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      console.log('Erro ao buscar categorias de produtos ', error);
    }
  };

  // Função para capturar o click na categoria
  const handleCategoryClick = async (categoryId: string) => {
    setSelectedCategory(categoryId);
    try {
      const data = await getProductsFromCategoryAndQuery(categoryId, '');
      setListProducts(data.results);
      console.log(selectedCategory);
    } catch (error) {
      console.log('Erro ao buscar produtos da categoria ', error);
      setListProducts([]);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <div className="home-page">
      {listProducts.length === 0 ? (
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
              onClick={ () => handleCategoryClick(category.id) }
              key={ category.id }
            >
              { category.name }
            </button>
          ))}
        </div>
      </aside>

    </div>
  );
}

export default Home;
