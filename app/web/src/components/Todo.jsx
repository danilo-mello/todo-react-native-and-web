import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import css from './styles.css'

const Todo = () => {
    return(
        <div className="todo container">
            <h1>Todo Web App</h1>
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo