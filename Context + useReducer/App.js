import {useContext, useRef} from 'react'
import {StoreContext, actions} from './store'

function App() {
    const [state, dispatch] = useContext(StoreContext)
    const inputRef = useRef()
    
    const handleAdd = () => {
        dispatch(actions.addTodo(state.todoInput))
        state.todoInput = ''
        inputRef.current.focus()
    }

    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index))
        inputRef.current.focus()
    }

    const handleChange = (index) => {
        dispatch(actions.changeTodo(index, state.todoInput))
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Todo-list</h1>
            <input value = {state.todoInput}
                   placeholder = 'Enter task...'
                   onChange = {e => dispatch(actions.setTodoInput(e.target.value))}
                   ref = {inputRef}>
            </input>
            <button onClick = {handleAdd}>Add</button>
            <ul>
                {state.todos.map((todo, index) => (
                    <>
                    <li key = {index}>{todo}</li>
                    <button onClick = {() => {handleChange(index)}}>Change</button>
                    <button onClick = {() => {handleDelete(index)}}>Delete</button>
                    </>
                ))}      
            </ul>
        </div>
    )
}

export default App
