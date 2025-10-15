import React from 'react'

const TodoList = ({todos, handleComplete}) => {
  return (
    <>
 <ul>
       { todos.map((item,index)=>{
        return (
            <div style={{display:"flex"}} key={index}>
                <li> {item.task}</li>
              { !item.completed &&  <button onClick={()=>handleComplete(index)}>Complete</button>}
            </div>
        )
       })}
       </ul>
    </>
  )
}

export default TodoList