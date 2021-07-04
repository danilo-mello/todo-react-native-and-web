import React, { useState, useEffect } from 'react'

import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

import { url, setIsUpdating, deleteTodo, updateTodo } from '../api/utils'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [updatedTodo, setUpdatedTodo] = useState("")

    const updateHandler = (todo) => {
        updateTodo(todo, updatedTodo)
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

    if (todos.length == 0){
        return(
            <Text style={styles.emptyTodos}>
                Nothing to do on the list...
            </Text>
        )
    }

    return(
        <View style={styles.todoListContainer}>
            <FlatList
                data={todos}
                renderItem={({item}) =>
                    <View style={styles.todoContainer}> 
                    <Text 
                        style={styles.todoTitle} 
                    >
                        {item.todo}
                    </Text>
                    <Text
                        style={styles.todoUpdate} 
                        onPress={() => setIsUpdating(item)}
                    >
                        Update
                    </Text>
                    <Text
                        style={styles.todoDelete} 
                        onPress={() => deleteTodo(item)}
                    >
                        Delete
                    </Text>

                    {
                        item.isUpdating && 

                            <View>
                                <TextInput 
                                    style={styles.input}
                                    placeholder=""
                                    onChangeText={text => {setUpdatedTodo(text)}}
                                />
                                <Text 
                                    style={styles.btnCofirmUpdate} 
                                    onPress={() => updateHandler(item)}
                                >
                                    Ok
                                </Text>
                            </View>
                    }
                    </View>
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    emptyTodos: {
        backgroundColor: '#A1C6EA',
        color: '#04080F',
        width: 90

    },
    todoTitle: {
        margin: 5
    },
    todoDelete: {
        backgroundColor: '#cc0000',
        color: '#04080F',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        width: 80,
        borderRadius: 10,        
        margin: 5

    },
    todoUpdate: {
        backgroundColor: '#cccc00',
        color: '#04080F',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        width: 80,
        borderRadius: 10,
        margin: 5

    },
    btnCofirmUpdate: {
        backgroundColor: '#009933',
        color: '#04080F',
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        width: 80,
        borderRadius: 10,
    },
    todoListContainer: {
        backgroundColor: '#A1C6EA',
        width: 290,
        marginTop: 20,
        flexDirection: 'column',
        borderRadius: 10,
        padding: 15        

    },
    input: {
        backgroundColor: '#FFF',
        width: 150,
        height: 40,
        margin: 25,
        borderRadius: 10,

    },
    todoContainer: {
        flexDirection: 'row',
        flex: 1
    }

})

export default TodoList