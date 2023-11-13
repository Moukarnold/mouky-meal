import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";


const defaultCartState={
     items:[],
     totalamount:0
};

const cardReducer=(state, action)=>{
   if(action.type==="ADD"){
    const updatedItems= state.items.concat(action.item);
    const updatedTotalAmount= state.totalamount+action.item.price* action.item.amount;
    return{
        items:updatedItems,
        totalamount: updatedTotalAmount
    }
   }

    return defaultCartState ;
}

const CartProvider= props =>{
   const [cartState, dispatchCartAction] = useReducer(cardReducer, defaultCartState);
    
  const addItemToCartHandler= item =>{
    dispatchCartAction({type:"ADD", item:item});
  };
  const removeItemFromCartHandler = id=>{
    dispatchCartAction({type:"REMOVE", id:id});

  };
    const cartContxt = {
        items:cartState.items,
        totalamount:cartState.totalamount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }
return(
    <CartContext.Provider value={cartContxt}>
{props.children}

    </CartContext.Provider>
)
};

export default CartProvider;