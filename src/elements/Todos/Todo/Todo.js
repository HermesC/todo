import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import React, { useRef } from 'react';
import { deleteTask, updateTask } from '../../../Redux/actions/actions';
import { handler } from './TodoHandlers';
import { isExpired, parseDate } from '../../../common/helpers';
import s from './Todo.module.css'
import trashImg from '../../../assets/img/trash.png'

export const TODO_TYPE = 'changable'
export const BODY_SIZE = 25
const Todo = (props) => {
  const dispatch = useDispatch()
  let form = useRef("null")
  function setLifecycleCheck () {
    setInterval (() => {
      if (isExpired(parseDate(props.data.deadline), new Date()) && props.data.state !== 'done' && props.data.state !== 'expired'){
        props.updateTask(props.data.id, {state: 'expired'})
      }
    }, 10000)
  }
  const formik = useFormik({
    initialValues: {
         title: props.data.title,
         body: props.data.body,
         deadline: props.data.deadline,
     },
   onSubmit: values => {
     for (let child of form.current.children) {
       if ( child.getAttribute('type') !== 'date' )
       child.setAttribute('readOnly', true);
     }
      dispatch(updateTask(props.data.id,values))
 }
  })
  function trashClick (event) {
    if (props.data.id)
    dispatch(deleteTask(props.data.id))
  }
  function mapStateToStyle (state) {
    switch(state){
      case 'current': return s.current
      case 'expired': return s.expired
      case 'done': return s.done
      case 'urgent': return s.urgent
      default: throw new Error('Todo:mapStateToStyle: unknown todo state - ' + state)
    }
  }
  const todoTitleStyle = s.title + ' ' + mapStateToStyle(props.data.state)
  const todoDeadlineStyle = s.deadline
  const  todoBodyStyle = s.todoBody
  const trash = <img className={s.trashImg} onClick={trashClick} src={trashImg} alt=""/>
  if (isExpired( parseDate(props.data.deadline), new Date()) && props.data.state !== 'done' && props.data.state !== 'expired'){
    props.updateTask({state: 'expired'})
  }
  setLifecycleCheck()
  return (
    <div className={s.Todo} onDoubleClick={handler} onMouseOver={handler} onMouseOut={handler}>
        <form ref={form} onSubmit={formik.handleSubmit} onChange={console.log("hey")}>
            <div className={s.titleWrapper}><input data-type={TODO_TYPE} onChange={formik.handleChange} readOnly value={formik.values.title} onBlur={handler} name='title' className={todoTitleStyle }/><div className={s.imgWrapper}>{trash}</div></div>
            <div className={s.deadlineWrapper}><input type="date" onChange={(e) => { formik.handleChange(e); handler(e)}}
            name='deadline'  value={formik.values.deadline} className={todoDeadlineStyle}/></div>
            <input data-type={TODO_TYPE} onChange={formik.handleChange} readOnly onBlur={handler} name='body' className={todoBodyStyle} value={formik.values.body}/>
            <button className={s.submit} type="submit">Submit</button>
        </form>
    </div>
  )
}
export default Todo
