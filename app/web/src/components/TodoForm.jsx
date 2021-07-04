import React, { useState } from 'react'

import { addTodo } from '../../../api/utils'

const TodoForm = () => {

    const [todo, setTodo] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }

    return(
        <>
        <form className="add-todo-form" onSubmit={(e) => submitHandler(e)}>
        
            <input
                className="add-todo-input" 
                type="text"
                placeholder="Enter Todo here..."
                value={todo}
                onChange={(e) => {setTodo(e.target.value)}}
            />
            <button className="btn-add" type="submit">Add Todo</button>

        </form>
        </>
    )
}

export default TodoForm