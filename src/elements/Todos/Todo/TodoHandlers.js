import { BODY_SIZE, TODO_TYPE as todo_changable } from './Todo';
import { truncateText } from '../../../common/helpers';

export function handler (event, param){
   switch (event.type){
     case 'keypress':
        keypress(event)
        break;
     case 'dblclick':
        dblclick(event, param)
        break;
     case 'mouseover':
        mouseover(event)
        break;
     case 'mouseout':
        mouseout(event)
        break;
     case 'click':
        click(event)
        break;
     case 'blur':
        blur(event)
        break;
   }
}
function dblclick (event){
  if (event.target.dataset.type === todo_changable){
    event.target.removeAttribute('readonly')
    let end = event.target.value.length
    event.target.setSelectionRange(end,end)
    event.target.focus()
  }
}
function keypress(event){

  if (event.key === 'Enter'){

    if (event.target.dataset){
      if (event.target.dataset.type === todo_changable){
        event.target.setAttribute('readonly', 'false')
      }
    }
  }
}
function handleTrashClick (event){

}
function mouseover (event) {
  event.currentTarget.querySelector('img').style.display = 'inline'
}
function mouseout (event) {
  event.currentTarget.querySelector('img').style.display = 'none'
}
function click(event){
  if (event.target.tagName === "LABEL"){
    event.target.blur()
  }
}
function blur (event){
  event.target.setAttribute('readonly', true)
}
export function checkDeadline (date){

  if ((Number(date) >= 0) && (Number(date) <= 31)) return true
  else return false
}
