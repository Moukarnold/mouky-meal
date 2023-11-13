import React from "react";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

 import CartIcon from "../Cart/CartIcon";
 import  "./headers.css"
 


function HeadCartButton(props){
    const cartCTX= useContext(CartContext);
    const numberOfCartItems= cartCTX.items.reduce((currNumber, item)=>{
        return currNumber + item.amount;}, 0);


   return (
    <button onClick={props.onClick} >
    <span className="icon">
        <CartIcon/> 
    </span>
    <span><div> your cart</div> </span>
    <span className="badge"> {numberOfCartItems} </span>
        
    </button>
   )

}

export default HeadCartButton;