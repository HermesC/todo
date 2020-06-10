import { connect } from 'react-redux';
import React from  'react'

import { drag, drop } from '../../../Redux/dragAndDropActions';
import s from './Todo.module.css'


const Todo = (props)=>{
  function dragstart (event){
    event.target.style.opacity = '0.5'
    props.drag({
      title: props.data.title,
      deadline: props.data.deadline,
      body: props.data.body,
      state : props.data.state
    })
  }
  function dragend (event){
      event.target.style.opacity = '1'
  }
  function dragover (event){
    event.preventDefault()
  }
  function drop (event){
    props.drop()
  }
  const todoStyle = s.current

  const todo = Object.keys(props.dragData).length !== 0 ? props.dragData : props.data
  console.log('Object.keys(props.dragData).length = ' + Object.keys(props.dragData).length)
  return (
    <div className={ s.Todo}  draggable="true" onDragStart={dragstart}onDragEnd={dragend} onDragOver={dragover} onDrop={drop}>
      <header className={todoStyle}>{todo.title}</header>
      <div className={s.deadline}>{todo.deadline}</div>
      <div className={s.todoBody}>{todo.body}</div>
    </div>
  )
}
const mapStateToProps = (state)=> ({
  dragData: state.dragAndDropReducer,
  dragTitle: state.dragAndDropReducer
})
export default connect (mapStateToProps, { drag, drop })(Todo)
