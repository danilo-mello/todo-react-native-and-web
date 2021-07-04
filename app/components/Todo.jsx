import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'

import { StyleSheet, Text, View } from 'react-native';


const Todo = () => {
    return(
        <View style={styles.container} >
            <Text style={styles.title}>Todo Mobile App</Text>
            <TodoForm />
            <TodoList />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBD1EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: 30
  }
});


export default Todo