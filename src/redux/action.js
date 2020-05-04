import { TODO_INPUT, DELETE_TODO } from './actionType'


export const todoInput = (params) => {
    return {
        type : TODO_INPUT,
        params
    }
}
export const deleteTodo = (deleteId) => {
    return {
        type: DELETE_TODO,
        deleteId
    }
}