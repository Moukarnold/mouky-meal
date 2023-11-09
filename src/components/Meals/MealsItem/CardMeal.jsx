import React from "react";
import "./cardMeal.css";


function CardMeal(props){

      const price= `$${props.price.toFixed(2)}`
return(
  <li >
<div className="meals card">
        <h3> {props.name}</h3>
       <p><div>  {props.description}</div></p> 
        <div>{price}</div>
        </div>
        <div> </div>

  </li>)

}
export default CardMeal;