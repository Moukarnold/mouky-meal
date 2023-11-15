import React from "react";
import { useContext } from "react";
import "./mealItem.css";
import CardMealForm from "./cardMealForm";
import CartContext from "../../../store/CartContext";


function CardMeal(props){

   const cartCtx= useContext(CartContext);
      const price= `$${props.price.toFixed(2)}`
 
      function addToCartHandler(amount){
           cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount:amount,
            price: props.price
           });

      }
      

return(
  <li className="meal card">
     <div >
        <h3> {props.name}</h3>
        <p><div>  {props.description}</div></p> 
        <div>{price}</div>
     </div>   
      <div><CardMealForm onAddToCart={addToCartHandler} /></div>
  </li>)

}
export default CardMeal;