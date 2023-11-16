import React from "react";
import { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

function Cart(props){
 const cartCtx = useContext(CartContext);

     const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   const hasItems= cartCtx.items.length > 0;

    function cartItemRemoveHandler(id){
      cartCtx.removeItem(id);
    };

    function cartItemAddHandler(item){
        cartCtx.addItem({...item,amount: 1});
    };

      const cartItems= (
        <ul className="cart-item">
       { cartCtx.items.map((item)=>
         (  <CartItem  
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
           key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}/> 
            )
        )}
        </ul>)

    return(
        <>
         <Modal onClose={props.onClose}>
        {cartItems}
        <div className="total">
        <span> Total Amount</span>
        <span>{totalAmount} </span>
       </div>
       <div className="action"> 
        <button className="button--alt" onClick={props.onClose}> Close</button>
      { hasItems && <button className="button" > Order</button>}
       </div>
       </Modal>
        </>
    )
 }

export default Cart;
