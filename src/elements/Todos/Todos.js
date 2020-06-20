import { useSelector  } from 'react-redux';
import GridLayout from 'react-grid-layout'
import React from  'react'

import {
  createLayout,
  sortByPriorities,
  taskComparison
} from '../../common/helpers';
import { mapStateToProps } from '../../Redux/reactReduxMappers';
import Todo from './Todo/Todo';
import s from './Todos.module.css'


const Todos = (props) => {
  const { filter, todos } = useSelector (mapStateToProps)
  let filteredTodos = ''
  let todosElements = ''
  let layoutCustom = null
  if (todos.length >= 1){
    filteredTodos = todos.filter ((todo , i)=> {
      if (filter !== 'all'){
        if (filter === todo.state || (
            filter === 'current' && todo.state === 'urgent')) return true
        else return false
      } else return true
    })

  filteredTodos  = sortByPriorities(filteredTodos, ['expired', 'urgent', 'current', 'done'], taskComparison)
  layoutCustom = createLayout (filteredTodos, 3)
  todosElements = filteredTodos.map( todo => {
    return <div key={todo.id}><Todo key={todo.id} dataGrid={todo.id} data={todo}/ ></div>
  }
)
  }
  const resTodos = layoutCustom ? <GridLayout layout={layoutCustom} rowHeight={100} className={s.layout} cols={3} width={1200}>{todosElements}</GridLayout> : todosElements
  return (
    <div className={s.Todos}>
    {resTodos}
    </div>
  )
}

export default Todos
