import { ADD_TO_CART } from "./CartType";
export const cartInitialState=[];

const cartReducer = (state=cartInitialState,action)=>{
switch(action.type){
    case ADD_TO_CART :

    return[...state,action.payload]
    default :
    return state
}
}
export default cartReducer;