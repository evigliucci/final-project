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
  
    axios.post("/api/voter", {taxBracket})
      .then(data => console.log(data));
    
    let agriculture = document.querySelector("#DoA > input[type=hidden]").value;
    let commerce = document.querySelector("#DoC > input[type=hidden]").value;
    let defense = document.querySelector("#DoD > input[type=hidden]").value;
    let energy = document.querySelector("#DoE > input[type=hidden]").value;
    let education = document.querySelector("#DoEd > input[type=hidden]").value;
    let health_human_services = document.querySelector("#DoHHS > input[type=hidden]").value;
    let homeland_security = document.querySelector("#DoHS > input[type=hidden]").value;
    let interior = document.querySelector("#DoI > input[type=hidden]").value;
    let labor = document.querySelector("#DoL > input[type=hidden]").value;
    let state = document.querySelector("#DoS > input[type=hidden]").value;
    let transportation = document.querySelector("#DoT > input[type=hidden]").value;
    let treasury = document.querySelector("#DoTr > input[type=hidden]").value;
    let environmental_protection = document.querySelector("#EPA > input[type=hidden]").value;
    let communication = document.querySelector("#FCC > input[type=hidden]").value;
    let election = document.querySelector("#FEC > input[type=hidden]").value;
    let trade = document.querySelector("#FTC > input[type=hidden]").value;
    let housing_urban_development = document.querySelector("#HUD > input[type=hidden]").value;
    let social = document.querySelector("#SS > input[type=hidden]").value;
    let justice = document.querySelector("#DoJ > input[type=hidden]").value;
    let nasa = document.querySelector("#NASA > input[type=hidden]").value;
    let veterans = document.querySelector("#DoVA > input[type=hidden]").value;
    let equal_employment = document.querySelector("#EOEC > input[type=hidden]").value;
    
    var depts = [];
    depts.push(agriculture, commerce, communication, defense, education, election, energy, environmental_protection, equal_employment, health_human_services, homeland_security, housing_urban_development, interior, justice, labor, nasa, social, state, trade, transportation, treasury, veterans);
    console.log(depts);
    axios.post("api/vote", {depts: depts})
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