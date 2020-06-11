import { connect } from 'react-redux';
import React from  'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { mapStateToProps } from '../../Redux/indexRedux'
import Todo from './Todo/Todo';
import s from './Todos.module.css'

const Todos = (props) => {

  let todos = ''
  if (props.todos)
  todos = props.todos.map ((todo , i)=> <Todo key={i} data={todo}/>)
  return (
    <div className={s.Todos}>
    {todos}
    </div>
  )
}
export default connect (mapStateToProps, null)(Todos)
