import React, { useEffect, useState } from 'react';

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulación de llamada a la API
    const fetchedOrders = [
      // Datos de ejemplo
      { id: 1, date: '2023-07-01', total: '$100' },
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orders.map(order => (
        <div key={order.id} className="order">
          <h2>Order {order.id}</h2>
          <p>{order.date}</p>
          <p>{order.total}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;
