import React, { Component } from 'react';
import "./style.css";

class VoteBtn extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        console.log('Click happened');
        function populateDepts(){
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
            console.log(agriculture)
            console.log(fec);
        }
        populateDepts();
      }
    render(){
    return(
        <div>
<button type="button" class="btn btn-primary btn-lg" onClick={this.handleClick}>Large button</button>
        </div>
        
    )
}
  }

  
  export default VoteBtn;