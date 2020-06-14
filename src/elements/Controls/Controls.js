import { connect } from 'react-redux';
import React from  'react'
import { doAllTasks, setFilter } from '../../Redux/actions';
import s from './Controls.module.css'

const Controls = (props) => {
  function handleChange(event){
    if (event.target.value != 'doAll'){
     props.setFilter(event.target.value)
   } else props.doAllTasks({state: 'done'})
  }
  return (
    <div className={s.Controls}>
    <label htmlFor="filters">Фильтры</label>
      <select name="filters" defaultValue="all"onChange={handleChange}>
      	<option value="all">Все</option>
      	<option value="current">Текущие</option>
      	<option value="urgent">Срочные</option>
      	<option value="done">Выполненные</option>
        <option value="expired">Просроченные</option>
      </select>
      <div>
        <label htmlFor='doAll'>Выполнить все</label>
        <input onClick={handleChange} type="radio" id="doAll" name="filters" value="doAll"/>
      </div>
    </div>
  )
}
export default connect (null, { setFilter , doAllTasks})(Controls)
