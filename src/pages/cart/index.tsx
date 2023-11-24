import { Product } from "../../utils/types";

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
        // Renderizar a lista de produtos no carrinho quando a lista não estiver vazia
        // Coloque aqui o código para renderiza a lista de produtos
        // Apague este h3 abaixo após pegar a lista
        <h3>Carrinho com produtos</h3>
      )}
    </div>
  );
}

export default Cart;
