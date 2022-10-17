import { ADD_TO_CART } from './CartType';
export const addToCart =(product)=>({

type:ADD_TO_CART,
payload:product
})