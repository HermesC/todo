import { addTask, create } from './actions/actions';

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
  createTodo: (todo) => dispatch(create(todo)),
  addTask: (todo) => dispatch(addTask(todo))
})
export function inputStateToProps  (state){
  return {
    lastId: state.clientReducer.lastId + 1
  }
}
