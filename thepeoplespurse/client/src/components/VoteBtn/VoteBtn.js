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
    fetch('/taxBracket', {
      method: 'POST',
      data: {
        bracketObject
      }
    })
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
    this.setState({ tax_bracket_count: ' ' });
    function populateDepts() {
      const voteSelect = document.querySelectorAll('input');
      const voteValues = [];
      for (var i = 0; i < voteSelect.length; i++) {
        //console.log(voteSelect[i].value)
        voteValues.push(voteSelect[i].value);
      }
    }
    populateDepts();
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