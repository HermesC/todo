import { todoAPI } from '../api/api';

 export const GET_TODOS = 'GET_TODOS'

 export const PUT_TODOS = 'PUT_TODOS'

 export const CREATE = 'CREATE'

 export const DELETE = 'DELETE'

 export const CHANGE = 'CHANGE'

 export const CHANGE_ALL = 'CHANGE_ALL'

 export const SET_FILTER = 'SET_FILTER'

 export const SET_TODOS = 'SET_TODOS'

 export const DO_ALL = 'DO_ALL'

 export const doAll = () =>({
   type: DO_ALL
 })

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
  type: CHANGE,
  id,
  changes
})
export const changeAll = (changes) => ({
  type: CHANGE_ALL,
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

  let response = await todoAPI.getAllTasks()
  dispatch(setTodos(response))
    debugger
  return true;
}
export const addTask = (newTask) => async (dispatch) => {
  let response = await todoAPI.addTask(newTask)
  if (response){
     dispatch(create(response.newTask))
  } else {/*ERROR HANDLING*/}
}
export const updateTask = (id,changes) => async (dispatch) =>{
  let response = await todoAPI.updateTask(id,changes)
  if (response){
    dispatch(change(id,changes))
  }else {

  }
}
export const deleteTask = (id) => async (dispatch) =>{
  let response = await todoAPI.deleteTask(id)
  if (response){
    dispatch(deleteTodo(id))
  }else {

  }
}
export const doAllTasks = (changes) => async (dispatch) =>{
  let response = await todoAPI.updateAllTasks(changes)
  if (response){
    dispatch(changeAll(changes))
  }else {

  }
}
