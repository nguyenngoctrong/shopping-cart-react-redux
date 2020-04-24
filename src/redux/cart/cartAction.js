import * as types from "./cartType";
import axios from "axios";

export const fetchCart = () =>{
    return dispatch =>{
        if(localStorage.getItem('cart')===null){
            localStorage.setItem('cart',JSON.stringify([]))
        }else{
            const cart = JSON.parse(localStorage.getItem('cart'))
            let string ='http://localhost:3000/Product?id=-1'
            for (const item of cart) {
                string += `&id=${item.idCart}`
            }
            axios.get(string).then(res=>{
                let {data} = res;
                data.forEach(item => {
                    let cartItem = cart.find( x => x.idCart == item.id)
                    item = Object.assign(item,cartItem);
                });
                dispatch(setCart(data));
            })
        }
    }
}
export const setCart = cart =>{
    return {
        type:types.FETCH_CART,
        cart
    }
}
export const fetchCartWithId = id =>{
    return dispatch =>{
        const cart = JSON.parse(localStorage.getItem('cart'))
        const index = cart.findIndex( x => x.idCart == id)
        if(index === -1){
            axios.get(`http://localhost:3000/Product?id=${id}`).then( res =>{
                dispatch(addToCart(res.data));
            })
        }else{
            dispatch(updateCart(id))
        }
        
    }
}
export const addToCart = cartItem =>{
    return {
        type:types.ADD_TO_CART,
        cartItem
    }
}
export const updateCart = id =>{
    return {
        type:types.UPDATE_CART,
        id
    }
}
export const removeCart = id =>{
    return {
        type:types.REMOVE_CART,
        id
    }
}