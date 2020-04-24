import { FETCH_CART, ADD_TO_CART, UPDATE_CART, REMOVE_CART } from "./cartType";
const initialState = []

const setLocalStorage = state =>{
    let arr =  state.map( item => {
        return {
            idCart:item.id,
            amount:item.amount
        }
    })
    localStorage.setItem('cart',JSON.stringify(arr));
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART:
            const {cart} = action;
            return cart;
        case ADD_TO_CART:
            const item =action.cartItem[0];
            item.idCart = action.cartItem[0].id;
            item.amount =1;
            state.push(item);
            setLocalStorage(state);
            return [...state]
        case UPDATE_CART:
            let index = state.findIndex( x => x.id == action.id);
            state[index]={
                ...state[index],
                amount: state[index].amount+1
            }
            setLocalStorage(state);
            return [...state]
        case REMOVE_CART:
            let indexRemove = state.findIndex( x => x.id == action.id);
            state.splice(indexRemove,1);
            setLocalStorage(state);
            return[...state]

        default:
            return [...state]
    }
}

export default cartReducer;