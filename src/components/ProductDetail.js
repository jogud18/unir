import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de llamada a la API
    const fetchedProduct = {
      id: id,
      name: `Producto ${id}`,
      longDescription: 'Descripción larga del producto',
      image: '/path/to/image.jpg',
      price: '$100',
    };
    setProduct(fetchedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.longDescription}</p>
      <p>{product.price}</p>
      <button  className="button button-success">Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;
