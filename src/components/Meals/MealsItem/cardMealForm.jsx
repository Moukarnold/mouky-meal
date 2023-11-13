import React, { useState } from "react";
import { useRef } from "react";
import "./mealItem.css";
import Input from "../../UI/Input";
 

function CardMealForm(props){

 const [amountIsValid, setAmountIsValid]= useState(true);
  const amountInputRef= useRef();
   

   function submitHandler(event){
      event.preventDefault();

        //enteredAmount is a string
     const enteredAmount= amountInputRef.current.value;
      const enterdAmountNumber= +enteredAmount;

      if(enteredAmount.trim().length===0 || enteredAmount<1 || enterdAmountNumber>5){

        setAmountIsValid(false);
        return;
      }
      props.onAddToCart(enterdAmountNumber);
   };


return (
<form className="form" onSubmit={submitHandler}>
  <Input label = "Amount" ref={amountInputRef} input={{
    id:"amount",
    type:"number",
    min:"1",
    max:"5",
    step:"1",
    defaultValue:"1"
  }}/>
 <button> Add </button> 
 {!amountIsValid && <p> Please enter a valid amount (1 - 5)</p>}
</form>
)

}
export default CardMealForm;