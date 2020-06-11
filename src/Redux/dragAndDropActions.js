export const DRAG = 'DRAG'
export const DROP= 'DROP'
export const drag = (todo) => ({
  type: DRAG,
  todo

})
export const drop = (todo) => (
  {
    type: DROP,
    todo
  }
)
