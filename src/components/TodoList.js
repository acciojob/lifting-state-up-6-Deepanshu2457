import React from 'react'

const TodoList = ({todos, handleComplete}) => {
  return (
    <>
 <ul>
       { todos.map((item,index)=>{
        return (
            <div style={{display:"flex"}} key={index}>
                <li> {item.task} 
                      { !item.completed &&  <button onClick={()=>handleComplete(index)}>Complete</button>}
                </li>
            
            </div>
        )
       })}
       </ul>
    </>
  )
}

export default TodoList