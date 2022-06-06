import React from "react";
import { FaHome } from "react-icons/fa";

export default function TopBar() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 fw-bold" href="#">
            Board of Directors
            <button className="bg-success text-white border-0 rounded-3 mx-4 fs-5">Working</button>
          </a>
        </div>
      </nav>

      {/* overview part */}
      <div className="container">
        <div className="row">
          <div
            className="col-md-10 bg-white p-3 mb-4"
            style={{ border: "1px solid #EAE8E8" }}
          >
            {/* <div className="align-items-center"><FaHome size={30} /> Overview </div> */}
            <div className="ml-5 fs-4 fw-normal">
              <FaHome size={30} /> Overview
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
