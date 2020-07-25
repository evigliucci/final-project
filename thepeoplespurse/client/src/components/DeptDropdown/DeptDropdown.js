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
            <p>link to website of dept</p>
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