import React from 'react';

function ReturnOrder() {
  return (
    <div className="return-order">
      <h1>Return Order</h1>
      <form>
        <label>Orden:  </label>
        <input type="text" />
        <label>Razon de devolucion</label>
        <input type="text" />
        <button  className="button button-success">Regresar</button>
      </form>
    </div>
  );
}

export default ReturnOrder;