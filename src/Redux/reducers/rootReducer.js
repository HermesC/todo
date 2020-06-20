// ПРЕДЛАГАЮ РАЗДЕЛИТЬ РЕДЬЮСЕРЫ НА СЕРВЕРНЫЕ, И КЛИЕНТСКИЕ, ПОКА ЧТО ПИШУ ВСЕ В ОДНОМ
import { combineReducers } from 'redux'
import clientReducer from './clientReducer';
import serverReducer from './serverReducer';

const rootReducer = combineReducers ({
  serverReducer,
  clientReducer
})
export default rootReducer
