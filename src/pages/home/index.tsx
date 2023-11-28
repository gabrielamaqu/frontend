import './home.css';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

  // Função para adicionar um produto ao carrinho
  const handleAddToCartClick = (product: Product) => {
    setListProductsCart((prevCart) => [...prevCart, product]);
  };

  // Função para capturar o clique na categoria
  const handleCategoryClick = async (categoryId: string) => {
    // Evite fazer uma chamada à API se a categoria já estiver selecionada
    if (categoryId !== selectedCategory) {
      setSelectedCategory(categoryId);
      try {
        const data = await getProductsFromCategoryAndQuery(categoryId, '');
        setListProductsCart((prevCart) => [...prevCart, ...data.results]);
      } catch (error) {
        console.log('Erro ao buscar produtos da categoria ', error);
      }
    }
  };

  // Use useEffect para chamar a função de buscar categorias ao montar o componente
  useEffect(() => {
    const fetchCategoryList = async () => {
      if (categories.length === 0) {
        try {
          const productsCategory = await getCategories();
          setCategories(productsCategory);
        } catch (error) {
          console.log('Erro ao buscar categorias de produtos ', error);
        }
      }
    };

    fetchCategoryList();
  }, [categories]);

  return (
    <div className="home-page">
      {listProducts.length === 0 ? (
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
      ) : (
        <main>
          {listProducts.map((product) => (
            <Link
              key={ product.id }
              to={ `/product/${product.id}` }
              data-testid="product-detail-link"
            >
              <div key={ product.id } data-testid="product">
                <img src={ product.thumbnail } alt={ product.title } />
                <h3>{product.title}</h3>
                <span>
                  Preço: R$
                  { product.price }
                </span>
                <div data-testid="product-add-to-cart">
                  <button
                    onClick={ () => handleAddToCartClick(product) }
                    data-testid="product-add-to-cart"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </main>
      )}

      <button
        data-testid="product-add-to-cart"
      >
        ADD TO CART
      </button>

      <NavLink to="/cart">
        <button data-testid="go-to-cart-link">GO TO CART</button>
      </NavLink>

      <aside className="categories">
        <h3>Categorias</h3>
        <div>
          {categories.map((category: any) => (
            <button
              data-testid="category"
              onClick={ () => handleCategoryClick(category.id) }
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
