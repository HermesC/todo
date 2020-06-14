import {
  CHANGE,
  CREATE,
  DELETE,
  DO_ALL,
  SET_FILTER,
  CHANGE_ALL,
  SET_TODOS
} from '../actions';

const initialState = {
  filter: 'all',
  lastId: 0,
  todos: []
}
function clientReducer (state = initialState, action){
  switch (action.type) {
    //КЛИЕНТСКИЕ
    case SET_TODOS:

    return {...state, lastId: action.todos.length,todos: action.todos}
    case CREATE:
    const newTodos = [...state.todos, action.todo]
    return {...state, lastId: state.lastId + 1,todos: newTodos}
    case DELETE:
    return {...state, lastId: state.lastId -1, todos: state.todos.filter(todo => todo.id !== action.id)}
    case CHANGE:
      return {...state, todos: state.todos.map((task) => {
        if (task.id === action.id) return {...task, ...action.changes}
        else return task
      })}
    case CHANGE_ALL:
    return {...state, todos: state.todos.map (task => ({...task, ...action.changes}))}
    case DO_ALL:
    const updatedTodos = state.todos.map(todo => {
      return {...todo, state: 'done'}
    }
    )
    return {...state, todos: updatedTodos}
    case SET_FILTER:
    return {...state, filter: action.filter}
    default: return state
  }
}
export default clientReducer
