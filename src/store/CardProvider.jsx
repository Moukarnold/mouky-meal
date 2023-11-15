import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";


const defaultCartState={
     items:[],
     totalAmount:0
};

const cardReducer=(state, action)=>{
   if(action.type==="ADD"){
    const updatedTotalAmount= state.totalAmount+action.item.price* action.item.amount;


const existingCartItemIndex= state.items.findIndex((item)=>item.id === action.item.id);
 const existingCartItem = state.items[existingCartItemIndex];
  let updatedItems;

if (existingCartItem){
  const updatedItem={
    ...existingCartItem,
    amount:existingCartItem.amount + action.item.amount
  };
  updatedItems=[...state.items];
  updatedItems[existingCartItemIndex]=updatedItem
}else {
  updatedItems= state.items.concat(action.item);

}
return{
        items:updatedItems,
        totalAmount: updatedTotalAmount
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
    dispatchCartAction({type:"REMOCE", id:id});

  };
    const cartContxt = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
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