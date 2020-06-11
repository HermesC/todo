import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { create } from './actions';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export function mapStateToProps (state){
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
