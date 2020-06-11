import { todoAPI } from '../api/api';

 export const GET_TODOS = 'GET_TODOS'

 export const PUT_TODOS = 'PUT_TODOS'

 export const CREATE = 'CREATE'

 export const DELETE = 'DELETE'

 export const CHANGE_TODO = 'CHANGE'

 export const SET_FILTER = 'SET_FILTER'
 export const SET_TODOS = 'SET_TODOS'

export const getAllTodos = () => ({
  type: GET_TODOS
})
export const putTodos = todos =>({
  type: PUT_TODOS,
  todos
})
export const create = todo => ({
  type: CREATE,
  todo
})
export const deleteTodo = id=> ({
  type: DELETE,
  id
})
export const change = (id,changes) => ({
  type: CHANGE_TODO,
  id,
  changes
})
export const setFilter = (filter)=> ({
  type: SET_FILTER,
  filter
})
export const setTodos = todos =>({
  type: SET_TODOS,
  todos
})


// Thunks

export const getAllTasks = () => async (dispatch) => {
  debugger
  let response = await todoAPI.getAllTasks()
  dispatch(setTodos(response))
  return true;
}
