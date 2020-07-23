import React, { Component } from 'react';
import "./style.css";

class DeptDropdown extends Component {
  render() {
    return (
      <>
        <div className="btn-group">
          <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Get Information for a Government Agency
  </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" id="019" href="#">Dept of State</a>
            <a className="dropdown-item" id="097" href="#">Dept of Defense</a>
            <a className="dropdown-item" id="089" href="#">Dept of Energy</a>
            <a className="dropdown-item" id="1601" href="#">Dept of Labor</a>
            <a className="dropdown-item" id="012" href="#">Dept of Agriculture</a>
            <a className="dropdown-item" id="070" href="#">Dept of Homeland Security</a>
            <a className="dropdown-item" id="069" href="#">Dept of Transportation</a>
            <a className="dropdown-item" id="013" href="#">Dept of Commerce</a>
            <a className="dropdown-item" id="091" href="#">Dept of Education</a>
            <a className="dropdown-item" id="075" href="#">Dept of Health & Human Services</a>
            <a className="dropdown-item" id="086" href="#">Dept of Housing & Urban Development</a>
            <a className="dropdown-item" id="015" href="#">Dept of Justice</a>
            <a className="dropdown-item" id="014" href="#">Dept of the Interior</a>
            <a className="dropdown-item" id="020" href="#">Dept of the Treasury</a>
            <a className="dropdown-item" id="068" href="#">Environmental Protection Agency</a>
            <a className="dropdown-item" id="027" href="#">Federal Communication Comission</a>
            <a className="dropdown-item" id="360" href="#">Federal Election Comission</a>
            <a className="dropdown-item" id="029" href="#">Federal Trade Comission</a>
            <a className="dropdown-item" id="045" href="#">Equal Employment Opportunity Comission</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" id="getAll" href="#">Get Information for All Agencies</a>
          </div>
        </div>


        <div className="list-group">
          <a className="list-group-item list-group-item-action active">
            <div className="d-flex w-100 justify-content-between">
              <h3>Department Name</h3>
              <h4>abbreviation populated from API call</h4>
              <img src="..." className="mr-3" alt="..."></img>
            </div>
            <p className="mb-1">Short description /mission populated from API call</p>
            <p>Budget Amount</p>
            <p href="">link to website of dept</p>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
              Agency Specific Budget
 </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">insert "agency" and budget breakdown</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    this body will be populated with a budget breakdown of each agency by it's components
       </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </>
    )
  }
}
export default DeptDropdown;