import React, { Component } from 'react';
import axios from 'axios';
import "./VoteBtn.css";

class VoteBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let taxBracket = parseInt(document.querySelector(".active").id);
    console.log("taxBracket = " + taxBracket)
    let bracketObject = {
      taxBracket
    }
    axios.post("/api/vote", {taxBracket: taxBracket})
      .then(data => console.log(data));
   
  }
  render() {
    return (
      <div>
        <button type="button" className="voteBtn" onClick={this.handleClick}>Submit My Vote</button>
      </div>
    )
  }
}


export default VoteBtn;