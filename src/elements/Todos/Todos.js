import { connect } from 'react-redux';
import React from  'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { mapStateToProps } from '../../Redux/indexRedux'
import Todo from './Todo/Todo';
import s from './Todos.module.css'

const Todos = (props) => {
  let filteredTodos = ''
  if (props.todos)
  filteredTodos = props.todos.filter ((todo , i)=> {
    if (props.filter != 'all'){
      if (props.filter === todo.state || (
          props.filter === 'current' && todo.state === 'urgent')) return true
      else return false
    } else return true
  })
  const todos  = filteredTodos.map(todo => <Todo key={todo.id} data={todo}/ >)
  return (
    <div className={s.Todos}>
    {todos}
    </div>
  )
}
export default connect (mapStateToProps, null)(Todos)
