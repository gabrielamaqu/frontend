import { Product } from '../../utils/types';

type CartProps = {
  // aqui vamos receber a lista de produtos para o carrinho como Props,mas ainda não temos o tipo da lista de produtos no carrinho, após criar o ProductType, terá que colocar na tipagem: listProductsCart: Productype[]
  listProductsCart:Product[]
};

function Cart({ listProductsCart } : CartProps) {
  return (
    <div className="cart-page">
      {listProductsCart.length === 0 ? (
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      ) : (
        <div>
          {listProductsCart.map((product, index) => (
            <div key={ index } className="cart-item">
              <p data-testid={ `shopping-cart-product-name-${index}` }>{product.title}</p>
              <p>
                Preço: R$
                {product.price}
              </p>
              <p data-testid={ `shopping-cart-product-quantity-${index}` }>
                Quantidade:
                {product.id}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
