import React from "react";
import Headers from "./components/Header/Headers";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App(){
      const [cartIsShown, setCartIsShown]= useState(false);

  function showCarthandler(){
    setCartIsShown(true);
  };

function hideCartHandler(){
    setCartIsShown(false);
};


    return (
            <>
           
          { cartIsShown && <Cart onClose={hideCartHandler}/>}
          <Headers onShowCart={showCarthandler} /> 
          <main>
            <Meals/>
           </main>
           </>
           )  ;

}

export default App;