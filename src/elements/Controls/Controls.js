import { connect } from 'react-redux';
import React from  'react'
import { doAll, setFilter } from '../../Redux/actions';
import s from './Controls.module.css'

const Controls = (props) => {
  function handleChange(event){
    if (event.target.value != 'doAll')
     props.setFilter(event.target.value)
     else props.doAll()
  }
  return (
    <div className={s.Controls}>
    <label for="filters">Фильтры</label>
      <select name="filters"onChange={handleChange}>
      	<option value="all" selected>Все</option>
      	<option value="current">Текущие</option>
      	<option value="urgent">Срочные</option>
      	<option value="done">Выполненные</option>
        <option value="dead">Просроченные</option>
      </select>
      <div>
        <label for='doAll'>Выполнить все</label>
        <input onClick={handleChange} type="radio" id="doAll" name="filters" value="doAll"/>
      </div>
    </div>
  )
}
export default connect (null, { setFilter , doAll})(Controls)
