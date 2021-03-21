import React, { useState } from 'react';
import './App.css';

import Todo from "./components/Todo";
import AllTodo from "./components/AllTodo";

function App() {
 const [todos, setTodos] = useState([])

 const createTodo = (newTodo) => {
  setTodos([...todos, newTodo])
 }
 console.log(todos);

 const deleteTodo = (index) => {
   const updatedTodos = todos.filter((todo, idx) => {  // from all todos, delete a selcted todo(one item) that is idx != index
     return idx != index
   })
   setTodos(updatedTodos)
 }


  return (
    <div className="App">
      <Todo createTodo={createTodo}/>
      <AllTodo todos={todos} setTodos={setTodos} deleteTodo={deleteTodo}/>
       
      {/* access to Todo.js */}
    </div>
  );
}

export default App;
