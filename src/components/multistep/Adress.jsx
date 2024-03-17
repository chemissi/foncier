import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../jobs/Sidebar";
import { Link } from "react-router-dom";

Adress.propTypes = {};

function Adress(props) {
  const { data } = props;
  return (
    <section className="candidates-section">
      <div className="tf-container">
        <div className="row">
          
          <div className="col-lg-6 ctn2">
            <Sidebar />
          </div>

          <div className="col-lg-6 tf-tab ctn2">
            <div className="group-select-display">
              <p className="nofi-job">Google Maps</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Adress;
