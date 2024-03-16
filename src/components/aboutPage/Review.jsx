import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/review/thumb2.png";
import shape1 from "../../assets/images/review/shape.png";
import client1 from "../../assets/images/review/client.jpg";
import icon1 from "../../assets/images/review/icon1.png";
import icon2 from "../../assets/images/review/icon2.png";
import icon3 from "../../assets/images/review/icon3.png";

function Review(props) {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  return (
    <section className="inner-review-section">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="wd-review-job thumb2 widget-counter stc">
              <div className="thumb">
                <img src={img1} alt="images" />
              </div>
              <div className="trader-box">
                <div className="content">
                  <h3 className="number wrap-counter">
                    <Waypoint onEnter={onVWEnter}>
                      <span>
                        {viewPortEntered && (
                          <CountUp
                            className="number"
                            end={25}
                            suffix="M+"
                            duration={3}
                          />
                        )}
                      </span>
                    </Waypoint>
                  </h3>
                  <div className="des">Jobs Available</div>
                </div>
                <div className="shape ani7">
                  <img src={shape1} alt="images" />
                </div>
              </div>
              <div className="tes-box ani5">
                <div className="client-box">
                  <div className="avt">
                    <img src={client1} alt="images" />
                    <div className="badge"> </div>
                  </div>
                  <div className="content">
                    <h6 className="number wrap-counter">
                      <Waypoint onEnter={onVWEnter}>
                        <span>
                          {viewPortEntered && (
                            <CountUp
                              className="number"
                              end={480}
                              suffix="+"
                              duration={3}
                            />
                          )}
                        </span>
                      </Waypoint>
                    </h6>
                    <div className="des">Happpy Candidates</div>
                  </div>
                </div>
              </div>
              <div className="icon1 ani3">
                <img src={icon1} alt="images" />
              </div>
              <div className="icon2 ani4">
                <img src={icon2} alt="images" />
              </div>
              <div className="icon3 ani6">
                <img src={icon3} alt="images" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 wow fadeInRight">
            <div className="wd-review-job contentbox1 page-text stc">
              <h3>FoncierOnLine</h3>
              <p>Vous possédez des actifs immobiliers situés
                  dans une grande agglomération ou en périphérie ?
                  vendez-les au meilleur prix à des investisseurs
                  et promoteurs partenaires en quête d'opportunités.</p>
              <p>
              Terrain, immeuble, locaux commerciaux, usine, murs d'hôtel, immobilier d'exception…décrivez les caractéristiques et informations de localisation en quelques clics. Obtenez gratuitement une estimation précise et juste de vos biens réalisée par nos experts. Découvrez combien vaut vraiment votre actif immobilier ! Les experts de FoncierOnline sont capables d'intervenir sur toutes les classes d'actifs immobiliers. Vous avez aussi la possibilité de lancez un appel d'offres afin de vendre au plus offrant ! Aucune commission à payer, accompagnement gratuit par FoncierOnline.
              </p>
              <Link to="#" className="tf-button style-1">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
