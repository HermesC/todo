import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import GridLayout from 'react-grid-layout'
import { getAllTasks } from './Redux/actions';
import Input from './elements/Input/Input';
import Todos from './elements/Todos/Todos';
import s from './App.module.css';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllTasks())

  }, [dispatch])
  
  return (
    <div className={s.App}>
      <Input/>
      <Todos />
    </div>
  );
}

export default App;
