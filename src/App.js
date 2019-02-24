import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList.js'
import TodoItems from './components/TodoItems.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [newItem, ...this.state.items]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }

  render () {
    //setInterval(function () {
      //if (this.items.length() > 0) {
       // this.deleteItem(this.items[0].key)
      //}
    //}, 3000)
    return (
      <div className='App'>
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
      </div>
    )
  }
}

export default App
