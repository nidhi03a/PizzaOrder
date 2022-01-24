import React, { createContext, useContext, useReducer } from 'react';
import  pizzaData  from'../../Database_json/Menu.json'
import { cartReducer } from '../../Redux/Reducer/Reducer';

const Cart=createContext();
const Context = ({children}) => {
    pizzaData.Pizza.map((itemsSub)=>(
        <>{itemsSub.subcategory}</>
        ))

    const [state,dispatch]= useReducer(cartReducer,{
        pizzaData:pizzaData,
        cart:[]
    });
  return (
      <Cart.Provider value={{state,dispatch}}>
       {children}
  </Cart.Provider>
  );
 };

 export const CartState=()=>{
     return useContext(Cart);
}
export default Context;

