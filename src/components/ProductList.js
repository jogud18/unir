import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import SearchBar from './SearchBar';
import Filter from './Filter';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API
    const fetchedProducts = [
      // Datos de ejemplo
      { id: 1, name: 'Playera', shortDescription: 'Playera Negra Lee', image: './Image/lee.jpg', price: '$100' },
      { id: 2, name: 'Celuar', shortDescription: 'Celular S23 ultra', image: './Image/Samsung.jpg', price: '$200' },
      
    ];
    setProducts(fetchedProducts);
  }, []);

  return (
    <div>
      <SearchBar />
      <Filter />
      <div className="product-list">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
