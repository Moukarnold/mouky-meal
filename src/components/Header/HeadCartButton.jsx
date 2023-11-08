import React from "react";
 import CartIcon from "../Carts/CartIcon";


function HeadCartButton(){
   return (
    <button  >
    <span className="icon">
        <CartIcon/> 
    </span>
    <span><div> your cart</div> </span>
    <span className="badge"> 0 </span>
        
    </button>
   )

}

export default HeadCartButton;