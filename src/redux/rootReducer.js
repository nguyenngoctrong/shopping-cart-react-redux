import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import  sizeReducer  from "./size/sizeReducer";
import  cartReducer  from "./cart/cartReducer";


const rootReducer = combineReducers({
    products:productReducer,
    size:sizeReducer,
    cart:cartReducer
})

export default rootReducer;