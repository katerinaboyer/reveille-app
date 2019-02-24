import React, { Component } from 'react'
import './App.css'
import TodoList from './components/TodoList.js'
import TodoItems from './components/TodoItems.js'
// import Countdown from './components/Countdown.js'
import ReactDOM from 'react-dom'
import Countdown from 'react-countdown-now'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [],
<<<<<<< HEAD
      currentItem: {text:'', key:''},
      disabledItems: [{text:'andy', key:'ajsdfjaiosdgj'}],
=======
      currentItem: { text: '', key: '' }
>>>>>>> 6a77d54290b5c9497e8ce9289e50f330fcbb2927
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

<<<<<<< HEAD
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

=======
<<<<<<< HEAD
  render () {
    //setInterval(function () {
      //if (this.items.length() > 0) {
       // this.deleteItem(this.items[0].key)
      //}
    //}, 3000)
    return (
      <div className='App'>
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
=======
  // ReactDOM.render (
  //   <Countdown date = {Date.now() + 1000000} />,
  //   document.getElementById('root')
  // );
>>>>>>> 6a77d54290b5c9497e8ce9289e50f330fcbb2927

  render() {
    return (
      <div className="App">
        <TodoItems
          className="white"
          entries = {this.state.disabledItems}
          deleteItem = {this.deleteItem} />

        <TodoItems entries = {this.state.items}
                   deleteItem = {this.deleteItem} />
<<<<<<< HEAD

=======
>>>>>>> cf54f3d67f67feda211f4e0480edceaf16f18ef5
>>>>>>> 6a77d54290b5c9497e8ce9289e50f330fcbb2927
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
