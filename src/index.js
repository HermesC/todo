import './index.css';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Redux/indexRedux'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// TODO: ПЕРЕДЕЛАТЬ МЕТОД ПРОВЕРКИ НА СРОК ГОДНОСТИ
// TODO: СТИЛИ, АДАПТИВНОСТЬ 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
