import React from "react";
import PropTypes from "prop-types";

ReviewJob10.propTypes = {};

function ReviewJob10({ className }) {
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="tf-title style-2">
          <div className="group-title">
            <h1>POUR QUI ? POURQUOI ?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="wd-review-job widget-counter">
              <div className="thumb3">
                <div className="group-user">
                  <div className="user-box">
                    <img
                      src={require("../../assets/images/review/user11.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user22.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user33.png")}
                      alt="images"
                    />
                    <img
                      src={require("../../assets/images/review/user44.png")}
                      alt="images"
                    />
                  </div>
                  <div className="content">
                    <h6 className="wrap-counter">
                      <span
                        className="counter-number"
                        data-speed="2000"
                        data-to="4800"
                      ></span>
                      <span>4800+</span>
                    </h6>
                    <p>Candidates happy</p>
                  </div>
                </div>
                <img
                  src={require("../../assets/images/review/thumb3.png")}
                  alt="images"
                />
                <div className="shape ani7">
                  <img
                    src={require("../../assets/images/review/shape2.png")}
                    alt="images"
                  />
                </div>
                <div className="icon1 ani7">
                  <img
                    src={require("../../assets/images/review/icon11.png")}
                    alt="images"
                  />
                </div>
                <div className="icon2 ani4">
                  <img
                    src={require("../../assets/images/review/icon22.png")}
                    alt="images"
                  />
                </div>
                <div className="icon3 ani6">
                  <img
                    src={require("../../assets/images/review/icon33.png")}
                    alt="images"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="wd-review-job pt10 wow fadeInUp">
              <ul className="list-review2">
                <li className="active">
                  <h6>Particulier</h6>
                  <p>Vous êtes un particulier et vous êtes propriétaire d’actifs immobiliers; vous voulez les vendre, mais pas à n'importe quel prix</p>
                </li>
                <li>
                  <h6>Chef d'entreprise, commerçant, professions libérales…</h6>
                  <p>Vous êtes chef d'entreprise, artisan, commerçant et vous êtes propriétaire des murs de votre commerce, de votre entreprise ou de votre site industriel et vous souhaitez préparer votre retraite ou opérer une reconversion ?
                  </p>
                </li>
                <li>
                  <h6>Collectivités</h6>
                  <p>Collectivités territoriales, mairies, communautés de communes, conseils départementaux et régionaux, vous disposez d'actifs immobiliers inexploités, parfois coûteux en entretien.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewJob10;
