import React, { useState } from "react";

const Todo = (props) => {
    const {createTodo} = props; // destruction from App.js

    const [todoText, setTodoText] = useState("");

 

function handledSubmit(event) {
    event.preventDefault()
    // this function will go back to App.js
    createTodo({
        todoText: todoText, 
        completed: false
    })
   
  
  }    

    
    return (
        <form onSubmit={(event) => handledSubmit(event)}>
            <label>Todo</label>
            <input 
            onChange={(event) => {
                setTodoText(event.target.value);
            }}
            type="text"
            value={todoText}
            />    
            <input type="submit" value="createTodo"></input>

        </form>
    )
        
 }

export default Todo;