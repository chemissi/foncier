import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

Banner03.propTypes = {};

function Banner03(props) {
  return (
    <section className="tf-slider sl2 over-flow-hidden">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="content wow fadeInUp">
              <div className="heading">
                <h2>Estimation GRATUITE et FIABLE de vos actifs immobiliers</h2>
                <p>Vous souhaitez obtenir une VALORISATION gratuite de votre actif immobilier personnel ou professionnel ?</p>
                <p>Renseignez votre adresse pour découvrir comment vendre votre parcelle 30% plus cher.</p>
              </div>
              <div className="form-sl">
                <form action="/job-list-sidebar">
                  <div className="row-group-search home1 st">
                    <div className="form-group-1">
                      <span className="icon-map-pin"></span>
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
          <div className="col-lg-4">
            <div className="wd-review-job thumb2 widget-counter tf-sl2">
              <div className="thumb">
                <img
                  src={require("../../assets/images/review/thumb4.png")}
                  alt="images"
                />
              </div>
              <div className="tes-box ani5">
                <div className="client-box">
                  <div className="avt">
                    <img
                      src={require("../../assets/images/review/client.jpg")}
                      alt="images"
                    />
                    <div className="badge"></div>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <CountUp
                        className="number"
                        end={780}
                        suffix="+"
                        duration={3}
                      />
                    </h6>
                    <div className="des">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="icon1 ani3">
                <img
                  src={require("../../assets/images/review/icon2.png")}
                  alt="images"
                />
              </div>
              <div className="icon2 ani4">
                <img
                  src={require("../../assets/images/review/icon3.png")}
                  alt="images"
                />
              </div>
              <div className="icon3 ani6">
                <img
                  src={require("../../assets/images/review/icon4.png")}
                  alt="images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner03;
