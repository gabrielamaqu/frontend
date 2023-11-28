import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/api';
import { Product } from '../../utils/types';

function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const data = await getProductById(productId);
          setProduct(data);
        }
      } catch (error) {
        console.log('Erro ao buscar detalhes do produto ', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      cart.push(product);
    }
  };

  return (
    <div className="product-detail-page">
      {product ? (
        <div>
          <h2 data-testid="product-detail-name">{product.title}</h2>
          <img
            src={ product.picture }
            alt={ product.title }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">
            Preço: R$
            {product.price}
          </p>
          <Link to={ `/product/${productId}` } data-testid="shopping-cart-button">
            Detalhes do Produto
          </Link>
          <button onClick={ addToCart } data-testid="product-detail-add-to-cart">
            Adicionar ao Carrinho
          </button>
        </div>
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
}

export default ProductDetail;
