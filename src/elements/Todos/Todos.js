import { connect } from 'react-redux';
import React from  'react'
import GridLayout from 'react-grid-layout'
import {
  createLayout,
  sortByPriorities,
  taskComparison
} from '../../common/helpers';
import { mapStateToProps } from '../../Redux/indexRedux'
import Todo from './Todo/Todo';
import s from './Todos.module.css'

const Todos = (props) => {
  let filteredTodos = ''
  let todos = ''
  let layoutCustom = null
  if (props.todos.length >= 1){

    filteredTodos = props.todos.filter ((todo , i)=> {
      if (props.filter != 'all'){
        if (props.filter === todo.state || (
            props.filter === 'current' && todo.state === 'urgent')) return true
        else return false
      } else return true
    })

  filteredTodos  = sortByPriorities(filteredTodos, ['expired', 'urgent', 'current', 'done'], taskComparison)
  layoutCustom = createLayout (filteredTodos, 3)
  todos = filteredTodos.map( todo => {
    return <div key={todo.id}><Todo key={todo.id} dataGrid={todo.id} data={todo}/ ></div>
  }
)
  }
  const resTodos = layoutCustom ? <GridLayout layout={layoutCustom} rowHeight={100} className={s.layout} cols={3} width={1200}>{todos}</GridLayout> : todos
  return (
    <div className={s.Todos}>
    {resTodos}
    </div>
  )
}

export default connect (mapStateToProps, null)(Todos)
