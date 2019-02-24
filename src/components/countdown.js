import React, { Component } from 'react'

class Countdown extends Component {

  var timeleft = 10;
  var downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 10 - timeleft;
    timeleft -= 1;
    if(timeleft <= 0)
      clearInterval(downloadTimer);
  }, 1000);
  render() {

  }

}

export default countdown
