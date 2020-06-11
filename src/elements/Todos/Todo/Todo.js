import { connect } from 'react-redux';
import React from  'react'
import { useState } from 'react'
import { drag, drop } from '../../../Redux/dragAndDropActions';
import s from './Todo.module.css'


const Todo = (props)=>{
  const [todo, setTodo] = useState(props.data)
  function dragstart (event){
    event.target.style.opacity = '0.5'
    props.drag(todo)
  }
  function dragend (event){
      event.target.style.opacity = '1'
      setTodo(props.replacedElementData)
  }
  function dragover (event){
    event.preventDefault()
  }
  function drop (event){
    event.preventDefault()
     props.drop(todo)
     setTodo(props.draggedElementData)
  }
  const todoStyle = s.current

  return (
    <div className={ s.Todo}  draggable="true" onDragStart={dragstart}onDragEnd={dragend} onDragOver={dragover} onDrop={drop}>
      <header className={todoStyle}>{todo.title}</header>
      <div className={s.deadline}>{todo.deadline}</div>
      <div className={s.todoBody}>{todo.body}</div>
    </div>
  )
}
const mapStateToProps = (state)=> ({
  draggedElementData: state.dragAndDropReducer.todoDrag,
  replacedElementData: state.dragAndDropReducer.todoDrop
})
export default connect (mapStateToProps, { drag, drop })(Todo)
