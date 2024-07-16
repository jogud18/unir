import React from 'react';
import { Link } from 'react-router-dom';


function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.shortDescription}</p>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`} className="button button-primary">Detalles</Link>
    </div>
  );
}

export default ProductItem;