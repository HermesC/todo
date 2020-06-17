
export function createTaskDate(referenceDate, offset){
  let resDate
  referenceDate.setDate(referenceDate.getDate() + offset)
  resDate = referenceDate.getFullYear()
  if (Number(referenceDate.getMonth()) <= 9){
    resDate += '-' + '0'  + referenceDate.getMonth()
  }else {
    resDate += '-' +referenceDate.getMonth()
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
export function isExpired (checkedDeadline, templateDeadline){
  const checkedDeadlineObj = {
    year: checkedDeadline.split('-')[0],
    month: checkedDeadline.split('-')[1],
    day: checkedDeadline.split('-')[2]
  }
  const templateDeadlineObj = {
    year: templateDeadline.split('-')[0],
    month: templateDeadline.split('-')[1],
    day: templateDeadline.split('-')[2]
  }
  if ((checkedDeadlineObj.year <= templateDeadlineObj.year) &&
      (checkedDeadlineObj.month <= templateDeadlineObj.month) &&
      (checkedDeadlineObj.day < templateDeadlineObj.day)) return true
  return false
}
export function truncateText (text, limiter, truncationString = '...'){
  if (text.length > limiter){
    return text.slice(0, limiter - truncationString.length) + truncationString
  }
}
export function bindParameters (func, params){
  return function () {
    func.apply(this, params)
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
  todoArr.map((todo, i) => {
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
