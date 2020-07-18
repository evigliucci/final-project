import React, { Component } from 'react';
import "./style.css";

class DeptDropdown extends Component{
  render(){
    return(
      <div class="btn-group">
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Get Information for a Government Agency
  </button>
  <div class="dropdown-menu">
   <a class="dropdown-item" id="DoS" href="#">Dept of State</a>
    <a class="dropdown-item" id="DoD" href="#">Dept of Defense</a>
    <a class="dropdown-item" id="DoE" href="#">Dept of Energy</a>
    <a class="dropdown-item" id="DoL" href="#">Dept of Labor</a>
    <a class="dropdown-item" id="DoA" href="#">Dept of Agriculture</a>
    <a class="dropdown-item" id="DoHS" href="#">Dept of Homeland Security</a>
    <a class="dropdown-item" id="DoT" href="#">Dept of Transportation</a>
    <a class="dropdown-item" id="DoC" href="#">Dept of Commerce</a>
    <a class="dropdown-item" id="DoEd" href="#">Dept of Education</a>
    <a class="dropdown-item" id="DoHHS" href="#">Dept of Health & Human Services</a>
    <a class="dropdown-item" id="HUD" href="#">Dept of Housing & Urban Development</a>
    <a class="dropdown-item" id="DoJ" href="#">Dept of Justice</a>
    <a class="dropdown-item" id="DoI" href="#">Dept of the Interior</a>
    <a class="dropdown-item" id="DoTr" href="#">Dept of the Treasury</a>
    <a class="dropdown-item" id="EPA" href="#">Environmental Protection Agency</a>
    <a class="dropdown-item" id="FCC" href="#">Federal Communication Comission</a>
    <a class="dropdown-item" id="FEC" href="#">Federal Election Comission</a>
    <a class="dropdown-item" id="FTC" href="#">Federal Trade Comission</a>
    <a class="dropdown-item" id="EEOC" href="#">Equal Employment Opportunity Comission</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" id="getAll" href="#">Get Information for All Agencies</a>
  </div>
</div>

    )
}
}
export default DeptDropdown;