import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SelectLocation from "../dropdown";
import Cover from "../../assets/images/slider/slider3.jpg"

Banner08.propTypes = {};

function Banner08(props) {
  return (
    <section className="tf-slider sl8 parallax " style={{backgroundImage:`url(${Cover})`}}>
      <div className="tf-container"> 
        <div className="row">
          <div className="col-lg-12">
            <div className="content wow fadeInUp">
              <div className="heading text-center">
                <h2 className="text-white">Estimation GRATUITE et FIABLE de vos actifs immobiliers</h2>
                <p className="text-white">
                Vous souhaitez obtenir une VALORISATION gratuite de votre actif immobilier personnel ou professionnel ?
                Renseignez votre adresse pour découvrir comment vendre votre parcelle 30% plus cher.
                </p>
              </div>
              <div className="form-sl">
                <form action="/job-list-sidebar">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-map-pin search-job"></span>
                      <input
                        type="text"
                        className="input-filter-search"
                        placeholder="Indiquez l'adresse de votre bien"
                      />
                    </div>
                    <div className="form-group-4">
                      <button type="submit" className="btn btn-find">
                        ESTIMER
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Banner08;
