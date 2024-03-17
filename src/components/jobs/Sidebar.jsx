import React from "react";
import PropTypes from "prop-types";
import RangeOne from "../range-slider";
import RangeTwo from "../range-slider/RangleTwo";
import SelectLocation from "../dropdown";
import Dropdown from "react-dropdown";

const select1 = [
  { value: "s1", label: "Design & Creative " },
  { value: "s2", label: "Design" },
  { value: "s3  ", label: "Ux/Ui" },
];
const select2 = [
  { value: "s1", label: "On-site" },
  { value: "s2", label: "Remote" },
  { value: "s3  ", label: "Freelancer" },
];

Sidebar.propTypes = {};

function Sidebar(props) {
  return (
    <div className="widget-filter st2  style-scroll po-sticky">
      <form>
        <div className="group-form">
          <label className="title">Adresse</label>
          <div className="group-input has-icon">
            <i className="icon-map-pin"></i>
            <SelectLocation />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Code Postal</label>
          <div className="group-input search-ip">
            <button>
              <i className="icon-search"></i>
            </button>
            <input
              type="text"
              placeholder="Code Postal"
              required
            />
          </div>
        </div>
        <div className="group-form">
          <label className="title">Ville</label>
          <div className="group-input">
            <Dropdown
              options={select1}
              className="react-dropdown select2"
              value={select1[0]}
            />
          </div>
        </div>
        
      
        <div className="group-form">
          <label className="title">On-site/Remote</label>
          <div className="group-input">
            <Dropdown
              options={select2}
              className="react-dropdown select2"
              value={select2[0]}
            />
          </div>
        </div>
       
        
        <button type="submit">VALIDEZ L'ADRESSE </button>
      </form>
    </div>
  );
}

export default Sidebar;
