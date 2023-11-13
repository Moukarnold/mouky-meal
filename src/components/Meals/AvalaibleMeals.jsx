import React from "react";
import  "./meals.css";
import CardMeal from "./MealsItem/CardMeal";


const DUMMY_MEALS = [
          {
            id: "m1",
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
          },
          {
            id: "m2",
            name: "Schnitzel",
            description: "A german specialty!",
            price: 16.5,
          },
          {
            id: "m3",
            name: "Barbecue Burger",
            description: "American, raw, meaty",
            price: 12.99,
          },
          {
            id: "m4",
            name: "Green Bowl",
            description: "Healthy...and green...",
            price: 18.99,
          },
        ]


function AvalaibleMeals(){

    const mealsList = DUMMY_MEALS.map((meals)=> 
    <li> 
         <CardMeal 
         key={meals.key}
         name= {meals.name}
         description = {meals.description}
         price= {meals.price} /> 
                
    </li>);



 return (  
 <section className="">  
    <ul>
      {mealsList}
      </ul>
 </section>)
};

export default AvalaibleMeals;