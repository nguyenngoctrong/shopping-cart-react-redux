import {FETCH_PRODUCT, REMOVE_PRODUCT, SORT_PRODUCT} from "./productType";

const initialState = []

const sortProdcut = (arr,number)=>{
    if(number == 2){
        return arr.sort((a,b)=> b.Price -a.Price)
    }else if(number == 3){
        return arr.sort((a,b)=> a.Price -b.Price)
    }
    return [...arr]

}
const productReducer = ( state = initialState ,action) =>{

    switch (action.type) {
        case FETCH_PRODUCT:
            let arr= state.concat(action.products);
            return sortProdcut(arr,action.number)
        case REMOVE_PRODUCT:
            const removeProduct = state.filter( x => x.Size !== action.name)
            return removeProduct;
        case SORT_PRODUCT:
            return sortProdcut(state,action.number)
            
        default:
            return [...state]
    }

}

export default productReducer;