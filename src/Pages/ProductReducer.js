import { ADD_PRODUCTS } from "./ProductTypes"
export const productsInitialState =[]
const productsReducer = (state = productsInitialState,action)=>{
switch(action.type){
    case ADD_PRODUCTS:
        return [...state,action.payload];
        default :
        return state;
}
}
export default productsReducer