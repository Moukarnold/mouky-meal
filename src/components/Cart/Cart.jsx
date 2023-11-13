import React from "react";
import { useContext } from "react";

import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/CartContext";

function Cart(props){
 const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
   const hasItems= cartCtx.items.length > 0;

      const cartItems= (
        <ul className="cart-item">
       { cartCtx.items.map((item)=>
          <li> {item.name}</li>
        )}
        </ul>)

    return(
        <>
         <Modal onClose={props.onClose}>
        
        <span> Total Amount</span>
        <span> 89</span>
       <div> 
        <button className="button--alt" onClick={props.onClose}> Close</button>
        {!hasItems && <button className="button"> Order </button>}
       </div>
       </Modal>
        </>
    )
 }

export default Cart;
