import React, { useState, useEffect, useRef } from 'react'

import { url, setIsUpdating, deleteTodo, updateTodo } from '../../../api/utils'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const inputEl = useRef(null)

    const updateHandler = (e, todo) => {
        e.preventDefault()
        updateTodo(todo, inputEl.current.value)
    }

    useEffect(() => {

        const interval = setInterval(()=>{
            getTodos()
        },500) 

        return () => clearInterval(interval)

    }, [])

    const getTodos = () => {
        fetch(url)
            .then(response => response.json())
            .then(responseData => {
                const loadedTodos = []
                for (const id in responseData){
                    loadedTodos.push({
                        id: id,
                        todo: responseData[id].todo,
                        isUpdating: responseData[id].isUpdating
                    })
                }
                setTodos(loadedTodos)
            })
    }
    
    if (todos.length == 0) {
        return (
            <div className="todo-list-container">
                <div className="empty-todos">Nothing to do on the list...</div>
            </div>
        )
    }

    return(
        <>
        <div className="todo-list-container">
            <ul>
 
                { 
                    todos && 
                        todos.map(todo => {
                            return(
                                
                                <li key={todo.id}>
                                    <div className="todo-container">
                                        <div className="todo-title">{todo.todo}</div>
                                        <div className="todo-update" onClick={() => setIsUpdating(todo)}>Update</div>
                                        <div className="todo-delete" onClick={() => deleteTodo(todo)}>Delete</div>

                                        { todo.isUpdating &&
                                            <form className="update-form" onSubmit={(e) => updateHandler(e, todo)}>
                                                <input
                                                    className="update-input"
                                                    type="text"
                                                    ref={inputEl}
                                                />
                                                <button className="btn-confirm-update" type="submit">Ok</button>
                                            </form>
                                        }
                                    </div>
                                </li>
                                
                            )
                        }) 
                }
            </ul>
        </div>
        </>
    )
}

export default TodoList