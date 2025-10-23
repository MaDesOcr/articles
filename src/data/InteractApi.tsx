export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=0');
  const data = await response.json();
  return data;
};

export const fetchProductById = async (id: number) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
};

