import React, { Component } from 'react';
import "./style.css";

class VoteBtn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // const taxBracket = document.querySelector(".active").id;
    //console.log("taxBracket = " + taxBracket)

    function populateDepts() {
      const voteSelect = document.querySelectorAll('input');
      const voteValues = [];
      for (var i = 0; i < voteSelect.length; i++) {
        //console.log(voteSelect[i].value)
        voteValues.push(voteSelect[i].value);
      }
      console.log(voteValues);

      const agriculture = document.querySelectorAll("#DoA input")[0].value;
      const commerce = document.querySelectorAll("#DoC input")[0].value;
      const defense = document.querySelectorAll("#DoD input")[0].value;
      const energy = document.querySelectorAll("#DoE input")[0].value;
      const education = document.querySelectorAll("#DoEd input")[0].value;
      const healthHumanServices = document.querySelectorAll("#DoHHS input")[0].value;
      const homeland = document.querySelectorAll("#DoHS input")[0].value;
      const interior = document.querySelectorAll("#DoI input")[0].value
      const labor = document.querySelectorAll("#DoL input")[0].value
      const state = document.querySelectorAll("#DoS input")[0].value
      const transportation = document.querySelectorAll("#DoT input")[0].value
      const treasury = document.querySelectorAll("#DoTr input")[0].value
      const epa = document.querySelectorAll("#EPA input")[0].value
      const fcc = document.querySelectorAll("#FCC input")[0].value
      const fec = document.querySelectorAll("#FEC input")[0].value
      const ftc = document.querySelectorAll("#FTC input")[0].value
      const hud = document.querySelectorAll("#HUD input")[0].value
      // console.log(agriculture)
      // console.log(fec);
      // console.log(ftc)
      // console.log(hud)
      // console.log(fcc)
      // console.log(epa)
      // console.log(treasury)
      // console.log(transportation)
      // console.log(state)
      // console.log(labor)
      // console.log(interior)
      // console.log(homeland)
    }
    populateDepts();
  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary btn-lg" onClick={this.handleClick}>Submit Your Budget!</button>
      </div>

    )
  }
}


export default VoteBtn;