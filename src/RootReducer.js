

import {combinedReducers} from 'redux';
import productsReducer from './Pages/ProductReducer';
import cartReducer from './Pages/CartReducer';
const rootReducer = combinedReducers({
    products:productsReducer,
    cart:cartReducer,
})
export default rootReducer;