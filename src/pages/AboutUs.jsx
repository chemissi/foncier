import React from "react";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';


import HeaderHome2 from "../components/header/HeaderHome2";

import ReviewJob10 from "../components/jobs/ReviewJob10";

import Footer from "../components/footer";
import Breadcrumb from "../components/breadcrumb";
import Review from "../components/aboutPage/Review";
import Gotop from "../components/gotop";
import BannerCounter from "../components/aboutPage/BannerCounter";
import { Link, NavLink } from "react-router-dom";
import img1 from "../assets/images/job/work-icon-1.jpg";
import img2 from "../assets/images/job/work-icon-2.jpg";
import img3 from "../assets/images/job/work-icon-3.jpg";
import Iconbox3 from "../components/aboutPage/Iconbox3";
import Testimonial from "../components/aboutPage/Testimonial";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import Partner from "../components/aboutPage/Partner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import { useState } from "react";

AboutUs.propTypes = {};

function AboutUs(props) {
  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };
  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>
          <Tabs className="tf-tab">
            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">

                      <li  className={`menu-item`}>
                        <NavLink to="/">Accueil</NavLink>
                      </li>
                      <li  className={`menu-item `}>
                        <NavLink to="/aboutus">Pour qui ? - Pourquoi ?</NavLink>
                      </li>
                      <li  className={`menu-item `}>
                        <NavLink to="/consultation">Consultation</NavLink>
                      </li>
                      <li  className={`menu-item `}>
                        <NavLink to="/investor">Investisseurs</NavLink>
                      </li>
                      <li  className={`menu-item `}>
                        <NavLink to="/Blog">Blog</NavLink>
                      </li>
                      <li  className={`menu-item `}>
                        <NavLink to="/contactus">Contact</NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>
            </div>
          </Tabs>
          <div className="header-customize-item button">
            <Link to="/">ESTIMER</Link>
          </div>
          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Besoin d'aide ?</p>
                <h6>
                  <Link to="tel:0806079379">08 06 07 93 79</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Helmet>
        <title>Page About</title>
        <meta name="description" content="About | Savez-vous que vendre à un professionnel permet de bénéficier d'un prix de vente jusqu'à 40 % supérieur à celui d'un particulier" />
        <meta name="keywords" content="About, professionnel, particulier" />
      </Helmet>

      <HeaderHome2 clname="act1" handleMobile={handleMobile} />
      <Breadcrumb title="Pour qui ? - Pourquoi ?" />
      <ReviewJob10 className="review-job-section-six" />
      <Review />
      <BannerCounter />
      <section className="wd-iconbox style-3 inner-iconbox-section">
        <div className="tf-container">
          <div className="title-iconbox style-3 stc">
            <h4>How it work?</h4>
            <p>
            Savez-vous que vendre à un professionnel permet de bénéficier d'un prix de vente jusqu'à 40 % supérieur à celui d'un particulier.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="group-col-3">
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img1} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Free resume assessments</Link>
                    </h6>
                    <p>
                      Prix de vente jusqu’à 40 % supérieur à celui fixé pour un particulier
                    </p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img2} alt="img" />
                    </div>
                  </div>
                  <div className="box-content">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">Job fit scoring</Link>
                    </h6>
                    <p>
                      Optimisation fiscale avantageuse grâce à un abattement fiscal sur la plus-value réalisée
                    </p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
                <div className="tf-iconbox style-3 cl3 stc2">
                  <div className="box-header">
                    <div className="img1">
                      <img src={img3} alt="img" />
                    </div>
                  </div>
                  <div className="box-content ">
                    <h6 className="box-title">
                      <Link to="/Blogsingle_v1">
                        Help every step of the way
                      </Link>
                    </h6>
                    <p>Pas de frais d’agence</p>
                    <button>
                      Start Now&nbsp;
                      <span className="icon-arrow-right2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Iconbox3 />
      <Testimonial data={dataTestimonials} />
      <Partner />
      <section className="wd-banner-CTA">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12  wow fadeInUp">
              <div className="group-banner-CTA">
                <h3>Job Opportunities Are Always Open</h3>
                <p>
                  Aenean porta, eros lacus congue lorem, sit amet mollis magna
                  velit ac erat.
                </p>
                <div className="group-btn">
                  <div className="form-group-4 header-customize-item">
                    <Link type="submit" to="/createaccount">Particulier</Link>{' '}
                    <Link type="submit" to="/createaccount">Investisseur</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Gotop />
    </>
  );
}

export default AboutUs;
