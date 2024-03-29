import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

CandiSec7.propTypes = {};

function CandiSec7(props) {
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
              <p className="nofi-job"> Carte</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default CandiSec7;
