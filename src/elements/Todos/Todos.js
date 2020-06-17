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

/*const Todos = (props) => {
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
  layoutCustom = createLayout (filteredTodos)
  todos = filteredTodos.map((todo, i) => {
  return<Todo key={todo.id} data={todo}/ >})
  }
  const testLayout = [{i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}]
  const resTodos = layoutCustom ? <GridLayout layout={layoutCustom}cols={3}>{todos}</GridLayout> : todos
  debugger
  return (
    <div className={s.Todos}>
    {resTodos}
    </div>
  )
}*/
class Todos extends React.Component {
  render() {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}];
    return (
      <div className={s.Todos}>
        <GridLayout className="layout" layout={layout}cols={12} rowHeight={30} width={1200}>
          <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
          <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
          <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div>
        </GridLayout>
      </div>
    )
  }
}
export default connect (mapStateToProps, null)(Todos)
