import React from  'react'

import s from './Todo.module.css'

const Todo = (props)=>{
  const todoStyle = s.current
  return (
    <div className={s.Todo} draggable="true">
      <header className={todoStyle}>{props.data.title}</header>
      <div className={s.deadline}>{props.data.deadline}</div>
      <div className={s.todoBody}>{props.data.body}</div>
    </div>
  )
}
export default Todo
