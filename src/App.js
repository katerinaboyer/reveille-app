import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    number: 1
  }

  // this is where function for button goes
  timer () {
    var myTimer = setInterval(myClock, 1000)
    var c = 5

    function myClock () {
      document.getElementById('demo').innerHTML = --c
      if (c == 0) {
        clearInterval(myTimer)
        alert('Times Up!')
      }
    }
  }

  render () {
    return (
      <div className='App'>
        Hello World
        <button onclick='clock()'> Start a timer </button>
        <button onclick='clearInterval(myTimer)'> Pause Timer </button>
      </div>
    )
  }
}

export default App
