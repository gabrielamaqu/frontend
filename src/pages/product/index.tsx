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

  return (
    <div className="product-detail-page">
      {product ? (
        <div>
          <h2 data-testid="product-detail-name">{ product.title }</h2>
          <img
            src={ product.picture }
            alt={ product.title }
            data-testid="product-detail-image"
          />
          <p
            data-testid="product-detail-price"
          >
            Preço: R$
            { product.price }
          </p>
          <Link to="/cart">
            <button>Adicionar ao Carrinho</button>
          </Link>
        </div>
      ) : (
        <p>Carregando detalhes do produto...</p>
      )}
    </div>
  );
}

export default ProductDetail;
