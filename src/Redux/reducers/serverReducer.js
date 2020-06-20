import { GET_TODOS, PUT_TODOS } from '../actions/actions';

function serverReducer (state = {}, action){
  switch (action.type) {
    case GET_TODOS:
      break;
    case PUT_TODOS:
    break;
    default:  return state
  }
}
export default serverReducer
