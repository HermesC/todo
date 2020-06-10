import { connect } from 'react-redux';
import React, { useState } from 'react';

import { mapDispatchToProps } from '../../Redux/indexRedux';
import s from './Input.module.css'

const Input = (props)=>{
  const [inputValue, setInputValue] = useState('')
  const [test, setTest] = useState('')
  function handleChange (event){
    setInputValue(event.target.value)
  }
  function handleSubmit (event){
    event.preventDefault()
    props.createTodo({
      title:` Задание ${props.lastId + 1}`,
      body: inputValue,
      deadline: '00:00',
      state: 'current'
    })
  }
  return (
    <div className={s.Input}>
        <div className={s.title}>Список задач</div>
        <div className={s.form}>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange}type="text"className={s.input} maxLength={250} value={inputValue} placeholder="Мне нужно..."/>
          </form>
        </div>
    </div>
  )
}
export default connect (null, mapDispatchToProps)(Input)
