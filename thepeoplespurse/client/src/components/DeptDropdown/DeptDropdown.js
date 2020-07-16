import React from 'react';
import "./style.css";

function DeptDropdown() {
    return(
        <div class="list-group">
  <a class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Department Name</h5>
      <small>abbreviation populated from API call</small>
    </div>
    <p class="mb-1">Short description /mission populated from API call</p>
    <img src="..." class="mr-3" alt="..."></img>
    <small href="">link to website of dept</small>
  </a>
  <a class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Department Name</h5>
      <small>abbreviation populated from API call</small>
    </div>
    <p class="mb-1">Short description /mission populated from API call</p>
    <img src="..." class="mr-3" alt="..."></img>
    <small href="">link to website of dept</small>
  </a>
  <a class="list-group-item list-group-item-action active">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Department Name</h5>
      <small>abbreviation populated from API call</small>
    </div>
    <p class="mb-1">Short description /mission populated from API call</p>
    <img src="..." class="mr-3" alt="..."></img>
    <small href="">link to website of dept</small>
  </a>
</div>
    )
}

export default DeptDropdown;