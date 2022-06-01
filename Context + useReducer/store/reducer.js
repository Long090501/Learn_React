import {SET_TODO_INPUT, ADD_TODO, DELETE_TODO, CHANGE_TODO} from './constants'

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.inputValue
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.inputValue]
            }
        case DELETE_TODO:
            const deleteTodos = state.todos.filter((todo, index) => (
                index !== action.index
            )) 
            return {
                ...state,
                todos: deleteTodos
            }
        case CHANGE_TODO:
            state.todos.splice(action.index, 1, state.todoInput)
            state.todoInput = ''
            return {
                ...state
            }
        default:
            throw new Error('Invalid action!')
    }
}

export {initState}
export default reducer