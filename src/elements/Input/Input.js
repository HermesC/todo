import { connect } from 'react-redux';
import React from 'react';

import { createTaskDate, createTaskState } from '../../common/helpers';
import { inputStateToProps, mapDispatchToProps } from '../../Redux/indexRedux';
import Controls from '../Controls/Controls';
import s from './Input.module.css'

export const URGENT_SYMBOL = '!срочно'
class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event){
    this.setState({inputValue: event.target.value})
  }
  handleSubmit (event){
    event.preventDefault()
    let completeOffset = 3
    let body = this.state.inputValue
    if (this.state.inputValue.includes(URGENT_SYMBOL)){
      completeOffset = 1
      body = this.state.inputValue.replace(URGENT_SYMBOL, '')
    }

    this.props.addTask({
      title:` Задание ${this.props.lastId}`,
      body: body,
      deadline: createTaskDate(new Date(),completeOffset),
      state: createTaskState(this.state.inputValue, 'current', 'urgent', URGENT_SYMBOL)
    })
    this.setState({inputValue :''})
  }
  render () {
    return (
    <div className={s.Input}>
        <div className={s.title}>Список задач</div>
        <div className={s.form}>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}type="text"className={s.input} maxLength={250} value={this.state.inputValue} placeholder="Мне нужно..."/>
          </form>
          <Controls />
        </div>
    </div>
  )
}
}
export default connect (inputStateToProps, mapDispatchToProps)(Input)
