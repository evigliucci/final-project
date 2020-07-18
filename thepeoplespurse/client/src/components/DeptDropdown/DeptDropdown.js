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
   <a class="dropdown-item" id="019" href="#">Dept of State</a>
    <a class="dropdown-item" id="097" href="#">Dept of Defense</a>
    <a class="dropdown-item" id="089" href="#">Dept of Energy</a>
    <a class="dropdown-item" id="1601" href="#">Dept of Labor</a>
    <a class="dropdown-item" id="012" href="#">Dept of Agriculture</a>
    <a class="dropdown-item" id="070" href="#">Dept of Homeland Security</a>
    <a class="dropdown-item" id="069" href="#">Dept of Transportation</a>
    <a class="dropdown-item" id="013" href="#">Dept of Commerce</a>
    <a class="dropdown-item" id="091" href="#">Dept of Education</a>
    <a class="dropdown-item" id="075" href="#">Dept of Health & Human Services</a>
    <a class="dropdown-item" id="086" href="#">Dept of Housing & Urban Development</a>
    <a class="dropdown-item" id="015" href="#">Dept of Justice</a>
    <a class="dropdown-item" id="014" href="#">Dept of the Interior</a>
    <a class="dropdown-item" id="020" href="#">Dept of the Treasury</a>
    <a class="dropdown-item" id="068" href="#">Environmental Protection Agency</a>
    <a class="dropdown-item" id="027" href="#">Federal Communication Comission</a>
    <a class="dropdown-item" id="360" href="#">Federal Election Comission</a>
    <a class="dropdown-item" id="029" href="#">Federal Trade Comission</a>
    <a class="dropdown-item" id="045" href="#">Equal Employment Opportunity Comission</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" id="getAll" href="#">Get Information for All Agencies</a>
  </div>
</div>

    )
}
}
export default DeptDropdown;