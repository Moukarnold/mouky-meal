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

    };

    function cartItemAddHandler(item){

    };

      const cartItems= (
        <ul className="cart-item">
       { cartCtx.items.map((item)=>
         ( <li> <CartItem  
          onAdd={cartItemAddHandler.bind(null, item.id)}
          onRemove={cartItemRemoveHandler.bind(null, item)}
           key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}/></li>)
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
       <div className="actions"> 
        <button className="button--alt" onClick={props.onClose}> Close</button>
      { hasItems && <button className="button" onClick={props.onClose}> Order</button>}
       </div>
       </Modal>
        </>
    )
 }

export default Cart;
