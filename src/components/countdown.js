import React, { Component } from 'react'

class countdown extends Component {

  // 25 minutes
  var count = 1500;

  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer()
  {
    count=count-1;
    if (count <= 0)
    {
       clearInterval(counter);
       //counter ended, do something here
       return;
    }

    document.getElementById("timer").innerHTML=count + " secs";
  }

  render() {

  }

}

export default countdown
