// Para listar as categorias disponíveis
export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

// Para buscar itens de uma categoria por termo (vale ressaltar que esse endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
export async function getProductsFromCategoryAndQuery(categoryId
: string, query : string) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);

  const data = await response.json();

  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
