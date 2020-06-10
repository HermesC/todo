// ПРЕДЛАГАЮ РАЗДЕЛИТЬ РЕДЬЮСЕРЫ НА СЕРВЕРНЫЕ, И КЛИЕНТСКИЕ, ПОКА ЧТО ПИШУ ВСЕ В ОДНОМ
import clientReducer from './clientReducer';
import serverReducer from './serverReducer';
import { combineReducers } from 'redux'
const rootReducer = combineReducers ({
  serverReducer,
  clientReducer
})
export default rootReducer
