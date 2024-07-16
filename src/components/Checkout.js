import React from 'react';

function Checkout() {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <label>Name</label>
        <input type="text" />
        <label>Address</label>
        <input type="text" />
        <label>Payment Method</label>
        <input type="text" />
        <button>Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;