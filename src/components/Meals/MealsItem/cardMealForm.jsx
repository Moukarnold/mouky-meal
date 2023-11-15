import React from "react";
import "./mealItem.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
 

function CardMealForm(props){
const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

   function submitHandler(event){
    event.preventDefault();
    
    const enterdAmount = amountInputRef.current.value;
     const enterdAmountNumber= +enterdAmount;

     if(enterdAmount.trim().length=== 0|| enterdAmountNumber<1 || enterdAmountNumber>5)
      {
        setAmountIsValid(false);
        return;
      }

      props.onAddToCart(enterdAmountNumber);
   }


return (
<form className="form" onSubmit={submitHandler}>
  <Input label = "Amount " ref={amountInputRef} input={{
    id:"amount",
    type:"number",
    min:"1",
    max:"5",
    step:"1",
    defaultValue:"1"
  }}/>
 <button> +Add </button> 
 {!amountIsValid &&  <p> please enter a valid numeber (1 - 5 )</p>}
</form>
)

}
export default CardMealForm;