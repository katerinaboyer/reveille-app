import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList.js'
import TodoItems from './components/TodoItems.js'
// import Countdown from './components/Countdown.js'
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown-now'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  // ReactDOM.render (
  //   <Countdown date = {Date.now() + 1000000} />,
  //   document.getElementById('root')
  // );

  render() {
    return (
      <div className="App">
        <Countdown value="0" max="10" id="progressBar"></Countdown>
        <span id="timer"></span>
        <TodoItems entries = {this.state.items}
                   deleteItem = {this.deleteItem} />
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} />
      </div>
    )
  }
}

export default App
