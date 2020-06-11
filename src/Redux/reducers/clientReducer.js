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
    return {filter: state.filter, todos: action.todos}
    case CREATE:
    const newTodos = [...state.todos, action.todo]
    return {filter: state.filter, todos: newTodos}
    case DELETE:
    return {filter: state.filter, todos: state.todos.filter(todo => todo.id === action.id)}
    case CHANGE_TODO:
    const toChange = state.todos.find(todo => todo.id === action.id)
    if (toChange){
        const toChangeCopy = {...toChange}
        for (let key in action.changes) {
          toChangeCopy[key] = action.changes[key]
        }
        return {filter: state.filter, todos: [...state.filter(todo => todo.id === action.id), toChangeCopy]}
    }else{
      throw new Error('clientReducer:Cannot find an element!')
    }
    case DO_ALL:
    const updatedTodos = state.todos.map(todo => {
      todo.state = 'done'
      return todo
    }
    )
    return {filter: state.filter, todos: updatedTodos}
    case SET_FILTER:
    debugger
    return {filter: action.filter, todos: state.todos}
    default: return state
  }
}
export default clientReducer
