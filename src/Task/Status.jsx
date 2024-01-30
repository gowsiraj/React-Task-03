// import { useState,useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
function Status({ selectedStatus, setSelectedStatus }) {
  const handleSelect = (selectedOption) => {
    console.log('Selected Status:', selectedOption);
    setSelectedStatus (selectedOption);
  };
 

return (
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 col-md-6 col-6 mt-1">
    <h4 style={{color:"#000066"}}>Task List:</h4>
    </div>
    <div className="col-lg-6 col-md-6 col-6">
    <div className="container text-center">
  <div className="row">
  <div className="col-lg-3 col-md-3 col-3">
      {/* Column */}
    </div>
    <div className="col-lg-3 col-md-3 col-3 text-end mt-1">
    <h4 style={{color:"#000066"}}>Filter</h4>
    </div>
    <div className="col-lg-6 col-md-6 col-6 text-start">

    <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                  {selectedStatus}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                    <Dropdown.Item eventKey="Not Completed">Not Completed</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
 </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   
);
}

export default Status;
