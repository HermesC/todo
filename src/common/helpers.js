
export function createTaskDate(referenceDate, offset){
  let resDate
  referenceDate.setDate(referenceDate.getDate() + offset)
  resDate = referenceDate.getFullYear()
  let month = referenceDate.getMonth() + 1
  if (month <= 9){
    resDate += '-' + '0'  + month
  }else {
    resDate += '-' + month
  }
  resDate += '-'  + referenceDate.getDate()
  return resDate
}
export function createTaskState (text, defaultState, transitionState= 'urgent', symbol = '!срочно'){
  if (text.includes(symbol)){
    text = text.replace(symbol, '')
    return transitionState
  }else return defaultState
}
export function isExpired (deadline, currentTime){
  if (((deadline - currentTime)) <= 0) return true
  return false
}
export function truncateText (text, limiter, truncationString = '...'){
  if (text.length > limiter){
    return text.slice(0, limiter - truncationString.length) + truncationString
  }
}
export function sortByPriorities (arr, priorities, comparisonCallback){
  let resArr = []
  for (let i= 0; i< priorities.length; i++){
    let res = arr.filter(elem => comparisonCallback(elem, priorities[i]))
     if (res.length >= 1) resArr.push(...res)
  }
  return resArr
}
export function taskComparison (task, value){
  if (task.state === value) return true
  return false
}
export function createLayout (todoArr, COLS){
  const res = []
  let cols = 0, counter = 0, rows = 0
  todoArr.forEach((todo, i) => {
    if (counter >= COLS){
       cols++
       rows = 0
       counter = 0
       if (cols > COLS) cols = 0
    }
    counter++
    res.push({i: todo.id, x: rows, y: cols, w: 1, h: 1})
    rows++
  })
  return res

}
export function parseDate(stringDate) {
const tempArrayDate = stringDate.split(/\D/);
  return new Date(tempArrayDate[0], --tempArrayDate[1], tempArrayDate[2]);
}
