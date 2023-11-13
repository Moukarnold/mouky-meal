import React from "react";
import meals from "../../assets/meals.jpg";
import  "./headers.css"
import HeadCartButton from "./HeadCartButton";

function Headers(props){


    return <div >
         <div className="hey">
          <div><h1> Mouky-Meals</h1></div>  
          <div><HeadCartButton onClick={props.onShowCart}/>
           </div>
        </div>
            
         <div className="main-image"> <img src= {meals} alt="meals on table"/>
         </div>
    
    </div>
};

export default Headers;