import {
  CHANGE_TODO,
  CREATE,
  DELETE,
  DO_ALL,
  SET_FILTER,
  SET_TODOS
} from '../actions';

const initialState = {
  filter: 'current',
  todos: []
}
function clientReducer (state = initialState, action){
  switch (action.type) {
    //КЛИЕНТСКИЕ
    case SET_TODOS:
    return {...state, todos: action.todos}
    case CREATE:
    const newTodos = [...state.todos, action.todo]
    return {...state, todos: newTodos}
    case DELETE:
    return {...state, todos: state.todos.filter(todo => todo.id === action.id)}
    case CHANGE_TODO:
      debugger;
      return {...state, todos: state.todos.map((task) => {
        if (task.id === action.id) return {...task, ...action.changes}
        else return task
      })}
    case DO_ALL:
    const updatedTodos = state.todos.map(todo => {
      todo.state = 'done'
      return todo
    }
    )
    return {...state, todos: updatedTodos}
    case SET_FILTER:
    return {...state, filter: action.filter}
    default: return state
  }
}
export default clientReducer
