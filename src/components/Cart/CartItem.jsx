import React from 'react';
import "./cartItem.css"

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='carts-items'>
      <div>
        <h2>{props.name}</h2>
        <div className="summarys">
          <span className="prices">{price}</span>
          <span className="amounts">x {props.amount}</span>
        </div>
      </div>
      <div className="actionss">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
