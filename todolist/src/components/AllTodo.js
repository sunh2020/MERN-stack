import React, { useState } from "react";

const AllTodo = (props) => {
    const {todos, deleteTodo, setTodos} = props; // destruct todos, deleteTodo

    const findIndex = (index) => {
        console.log(index);
    }

    const updateCheckbox = (index) => {
        console.log(index)
        const copyTodos = [...todos] // creates a copy of todo array from App.js
        copyTodos[index].completed = !copyTodos[index].completed;
        setTodos(copyTodos)
    }    

return (
 <div>
    <h2>All Todo List</h2>
    {
        todos.map((todo, index) => {
            return <p key={index}>
                {todo.todoText},{todo.completed?
                "completed":"incomplete"}
                 
                <input onChange={ () => updateCheckbox(index)} type="checkbox" name="" checked={todo.completed} />
                <button onClick={ () => deleteTodo(index)}>Delete</button>
            </p>
        }
        
        ) 
    }
  </div>  
)     
}


export default AllTodo;