import { connect } from 'react-redux';
import React from  'react'
import { useState } from 'react'
import { drag, drop } from '../../../Redux/dragAndDropActions';
import s from './Todo.module.css'
import { useFormik } from 'formik'

const Todo = (props)=>{
  const [todo, setTodo] = useState(props.data)
  const formik = useFormik({
    initialValues: {
     title: todo.title,
     body: todo.body,
     deadline: todo.deadline
   },
   onSubmit: (values) => {
     debugger
   }
  })
  function handleSubmit (event){

  }
  function handleInputChange(){

  }
  function handleChange (event){
    event.target.removeAttribute('readOnly');
  }
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
    <div onDoubleClick={handleChange} className={s.Todo}  draggable="true" onDragStart={dragstart}onDragEnd={dragend} onDragOver={dragover} onDrop={drop}>

      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} name='title' className={todoStyle  +  ' ' + s.changeinput} readOnly value={formik.values.title}></input>
        <input onChange={formik.handleChange} name='deadline' className={s.deadline +  ' ' + s.changeinput} readOnly value={formik.values.deadline}></input>
        <input onChange={formik.handleChange} name='body' className={s.todoBody +  ' ' + s.changeinput} readOnly value={formik.values.body}></input>
        <button type="submit"/>
      </form>
    </div>
  )
}
const mapStateToProps = (state)=> ({
  draggedElementData: state.dragAndDropReducer.todoDrag,
  replacedElementData: state.dragAndDropReducer.todoDrop
})
export default connect (mapStateToProps, { drag, drop })(Todo)
