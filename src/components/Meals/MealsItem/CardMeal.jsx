import React from "react";
import "./mealItem.css";
import CardMealForm from "./cardMealForm";


function CardMeal(props){

      const price= `$${props.price.toFixed(2)}`
return(
  <li className="meal card">
     <div >
        <h3> {props.name}</h3>
        <p><div>  {props.description}</div></p> 
        <div>{price}</div>
     </div>   
      <div><CardMealForm/></div>
  </li>)

}
export default CardMeal;