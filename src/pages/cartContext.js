import React, { createContext, useReducer } from "react";

// Define the initial state for the cart data
const initialCartData = [];

// Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART_DATA":
      return [
        ...state,
        {        
          titleEvent: action.payload.titleEvent,
          item: action.payload.item,
          dateEvent: action.payload.dateEvent,
          priceEvent: action.payload.priceEvent,
  }];
    default:
      return state;
  }
};

// Create the cart context
const CartContext = createContext();

// Create a cart provider component using useReducer and the cartReducer
export const CartProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, initialCartData);
console.log(cartData)
  return (
    <CartContext.Provider value={{ cartData, dispatch }} >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
