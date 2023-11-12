import React from "react";
 import CartIcon from "../Cart/CartIcon";
 import  "./headers.css"
 


function HeadCartButton(props){
    

   return (
    <button onClick={props.onClick} >
    <span className="icon">
        <CartIcon/> 
    </span>
    <span><div> your cart</div> </span>
    <span className="badge"> 0 </span>
        
    </button>
   )

}

export default HeadCartButton;