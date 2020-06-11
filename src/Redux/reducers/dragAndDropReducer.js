import {
  DRAG,
  DROP
} from '../dragAndDropActions';
const initialState = {
  todoDrag: {},
  todoDrop: {}
}
function dragAndDropReducer (state = initialState, action){
  switch (action.type) {
    case DRAG:
      return { todoDrag: action.todo, todoDrop: {}}
    case DROP:
      return {todoDrag: state.todoDrag, todoDrop: action.todo}
    default: return state
  }
}
export default dragAndDropReducer
