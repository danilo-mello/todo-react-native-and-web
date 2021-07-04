import React, { useState } from 'react'

import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

import { addTodo } from '../api/utils'

const TodoForm = () => {

    const [todo, setTodo] = useState("")

    const submitHandler = () => {
        addTodo(todo)
        setTodo("")
    }

    return(
        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Enter Todo here..."
                onChangeText={todo => {setTodo(todo)}}
            />
            <Text 
                style={styles.btn} 
                onPress={() => submitHandler()}
            > Add Todo 
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#DAE3E5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 60,
        width: 290,
        borderRadius: 10,        
        marginTop: 20
    },
    input: {
        backgroundColor: '#FFF',
        width: 150,
        height: 40,
        margin: 25,
        borderRadius: 10,

    },
    btn: {
        textAlign: 'center',
        height: 40,
        paddingTop: 10,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#507DBC',
        color: '#BBD1EA'
    }
})

export default TodoForm