import {createStore, dispatch} from 'redux'
import { create } from './actions';
import rootReducer from './reducers/rootReducer';

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export function mapStateToProps (state){
  debugger
  return {
    filter: state.clientReducer.filter,
    todos: state.clientReducer.todos
  }
}
export function mapLastIdToProps (state){
  return {
    lastId: state.todos.length
  }
}
export const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(create(todo))
})
