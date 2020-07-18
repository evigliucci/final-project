import React from 'react';
import DeptDropdown from "../components/DeptDropdown/DeptDropdown.js";
// import DeptPopulate from "../components/DeptDropdown/DeptPopulate.js";

const DeptInfo = () => {
  return (
    <main>
      <h1>Department Info Page</h1>
      
      <DeptDropdown />
      {/* <DeptPopulate /> */}
    </main>
  );
};

export default DeptInfo;
