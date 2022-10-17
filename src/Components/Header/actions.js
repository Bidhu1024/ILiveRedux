import { ADD_TO_CART,SHOW_CART } from "./Header.types";

export const showCart = () => ({
  type: SHOW_CART,
});
export const addToCart = () => ({
    type: ADD_TO_CART,
  });
  
    