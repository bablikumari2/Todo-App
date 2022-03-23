import { ADD_TODO , GET_TODO , EDIT_TODO ,DELETE_TODO } from "./actionTypes";

const init = {todos:[]};

export const reducer = (state=init,{type,payload}) => {
    switch(type) {
        case ADD_TODO : 
        return {
            ...state,
            todos:[...state.todos,payload],
        };
        case GET_TODO: 
        return {
            ...state,
             todos:payload,
        };
        case EDIT_TODO: 
        return {
            ...state,
            todos:[...state.todos],
        };
        case DELETE_TODO: 
        return {
            ...state,
             todos:payload,
        };
        default: return state;
    }
}