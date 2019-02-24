import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList.js'
import TodoItems from './components/TodoItems.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
      disabledItems: [{text:'andy', key:'ajsdfjaiosdgj'}],
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

  disableFirstItem() {
    //es 6 & es7 spread operator
    console.log("hello")
    if (this.state.items.length > 0) {
      const [first, ...rest ] = this.state.items;
      this.setState({
        items: rest,
        disabledItems: [...this.state.disabledItems, first]
      })
    }
  }

  componentDidMount() {
    this.intervalTimer = setInterval( () =>
      this.disableFirstItem(), 7000)
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalTimer)
  }


  render() {
    return (
      <div className="App">
        <TodoItems
          className="white"
          entries = {this.state.disabledItems}
          deleteItem = {this.deleteItem} />

        <TodoItems entries = {this.state.items}
                   deleteItem = {this.deleteItem} />
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
