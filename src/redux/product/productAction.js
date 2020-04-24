import { FETCH_PRODUCT, REMOVE_PRODUCT,SORT_PRODUCT } from "./productType";
import axios from "axios";


export const fetchProduct = (size,number) =>{
    return async dispatch =>{
        if(size.status){
            const res = await axios.get(`http://localhost:3000/Product?Size=${size.name}`)
            dispatch( setProduct(res.data,number) )
        }else{
            dispatch( removeProduct(size.name) )
        }
        
        
    }
}

export const setProduct = (products,number) =>{
    return {
        type: FETCH_PRODUCT,
        products,
        number
    }

}
export const removeProduct = name =>{
    return {
        type: REMOVE_PRODUCT,
        name
    }

}
export const sortProduct = number =>{
    return {
        type: SORT_PRODUCT,
        number
    }

}