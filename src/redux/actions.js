import {ADD_TODO,EDIT_TODO,GET_TODO,DELETE_TODO} from "./actionTypes"

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data,
});

export const editTodo = (id) => ({
    type: EDIT_TODO,
    payload: id,
});

export const getTodo = (data) => ({
    type: GET_TODO,
    payload: data,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});