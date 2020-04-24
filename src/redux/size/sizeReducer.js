import { CHANGE_STATUS } from "./sizeType";

const initialState = {
    "xs":{
        "name":"xs",
        "status":true
    },
    "s":{
        "name":"s",
        "status":false
    },
    "m":{
        "name":"m",
        "status":false
    },
    "ml":{
        "name":"ml",
        "status":false
    },
    "l":{
        "name":"l",
        "status":false
    },
    "xl":{
        "name":"xl",
        "status":false
    },
    "xxl":{
        "name":"xxl",
        "status":false
    },
    
    
}


const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            const size = action.size
            return {
                ...state,
                [size.name]:{
                    ...state[size.name],
                    status: !state[size.name].status

                }
            }

        default:
            return state
    }
}

export default sizeReducer;