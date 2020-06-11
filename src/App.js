import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';

import { addTask, getAllTasks } from './Redux/actions';
import Input from './elements/Input/Input';
import Todos from './elements/Todos/Todos';
import s from './App.module.css';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("ha??")
    dispatch(getAllTasks())
  }, [dispatch])
  return (
    <div className={s.App}>
      <Input createTodo={addTask}/>
      <Todos />
    </div>
  );
}

export default App;
