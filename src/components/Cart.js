import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API
    const fetchedCartItems = [
      // Datos de ejemplo
      { id: 1, name: 'Producto 1', image: '/path/to/image1.jpg', price: '$100' },
    ];
    setCartItems(fetchedCartItems);
  }, []);

  return (
    <div className="cart">
      <h1>Carrito de compra</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <button  className="button button-success">Eliminar</button>
        </div>
      ))}
      <button  className="button button-success">Comprar</button>
    </div>
  );
}

export default Cart;
