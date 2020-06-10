import React from 'react';

import { create } from './Redux/actions';
import Input from './elements/Input/Input';
import Todos from './elements/Todos/Todos';
import s from './App.module.css';

function App() {
  return (
    <div className={s.App}>
      <Input createTodo={create}/>
      <Todos />
    </div>
  );
}

export default App;
