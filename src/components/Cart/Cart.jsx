import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";


function Cart(props){
      const cartItems= 
        <ul className="cart-item">
       { [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item)=>
          <li> {item.name}</li>
        )}
        </ul>
      
     

    return(
        <>
      
       <Modal onClose={props.onClose}>
        
        <span> Total Amount</span>
        <span> 33.33</span>
       <div> 
        <button className="button--alt" onClick={props.onClose}> Close</button>
        <button className="button">Order</button>
       </div>
       

       </Modal>
        </>
    )
 


}

export default Cart;
