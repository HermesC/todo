import { connect } from 'react-redux';
import React from 'react';

import { mapDispatchToProps } from '../../Redux/indexRedux';
import Controls from '../Controls/Controls';
import s from './Input.module.css'

class Input extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      id: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event){
    this.setState({inputValue: event.target.value})
  }
  handleSubmit (event){
    event.preventDefault()
    this.props.createTodo({
      title:` Задание ${this.state.id + 1}`,
      body: this.state.inputValue,
      deadline: '00:00',
      state: 'current',
      id: this.state.id
    })
    this.setState({id: this.state.id + 1, inputValue: ''})
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
export default connect (null, mapDispatchToProps)(Input)
