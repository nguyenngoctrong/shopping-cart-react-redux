import { CHANGE_STATUS } from "./sizeType";

export const changeStatus = size =>{
    return {
        type:CHANGE_STATUS,
        size
    }
}