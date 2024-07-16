import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/order-history">Historial de Ordenes</Link>
        <Link to="/return-order">Cancelacion de Pedido</Link>
      </nav>
    </header>
  );
}

export default Header;