import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl);
  if (response) {
    const json = await response.json();
    return json;
  }
  return response;
};

export default fetchProducts;
