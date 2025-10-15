
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {

  const [todos,setTodos]=useState([
    {task: "Learn Reteact" , completed : false},
    {task: "Build a React app", completed : false},
    {task: "Deploy the React app", completed: false}

  ]);

    const handleComplete=(index)=>{
      const updateItem= todos.map((item,itemIndex)=>{
      return  itemIndex===index ? {...item, completed:true} : item
      })
      setTodos(updateItem)
    }
  return (
    <div>
     <TodoList todos={todos} handleComplete={handleComplete}/>
       
    </div>
  )
}

export default App

