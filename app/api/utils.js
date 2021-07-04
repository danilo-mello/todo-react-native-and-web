export const url = 'https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos.json'

export const addTodo = (todo) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({todo: todo, isUpdating: false})
    })
}

export const setIsUpdating = todo => {
    fetch(`https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({todo: todo.todo, isUpdating: !todo.isUpdating})
    }).then(response => response.json())
}

export const updateTodo = (todo, newTodo) => {
    fetch(`https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos/${todo.id}.json`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: newTodo,
            isUpdating: false
        })

    }).then(response => response.json())
} 

export const deleteTodo = todo => {
    fetch(`https://react-hooks-study-b2fcb-default-rtdb.firebaseio.com/todos/${todo.id}.json`, {
        method: 'DELETE'
    }).then(response => response.json())
}