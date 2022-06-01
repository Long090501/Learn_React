import {SET_TODO_INPUT, ADD_TODO, DELETE_TODO, CHANGE_TODO} from './constants'

export const setTodoInput = inputValue => ({
    type: SET_TODO_INPUT,
    inputValue
})

export const addTodo = inputValue => ({
    type: ADD_TODO,
    inputValue
})

export const deleteTodo = index => ({
    type: DELETE_TODO,
    index
})

export const changeTodo = (index, inputValue) => ({
    type: CHANGE_TODO,
    index, 
    inputValue
})