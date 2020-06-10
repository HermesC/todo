import {
  DRAG,
  DROP
} from '../dragAndDropActions';
function dragAndDropReducer (state = {}, action){
  switch (action.type) {
    case DRAG:
      return action.todo
    case DROP:
      return state
    default: return state
  }
}
export default dragAndDropReducer
