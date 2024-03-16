import React from "react";
import PropTypes from "prop-types";
import HeaderHome2 from "../components/header/HeaderHome2";
import PopUpForm from "../components/popup";

import Partner from "../components/partner";
import dataPartner from "../assets/fakeData/dataPartner";

import IconBox from "../components/iconbox";
import ReviewJob from "../components/jobs/ReviewJob";

import Blog01 from "../components/blog/Blog01";
import dataBlog from "../assets/fakeData/dataBlog";

import Testimonials from "../components/testimonials";
import dataTestimonials from "../assets/fakeData/dataTestimonials";
import About from "../components/about";
import About05 from "../components/about/About05";
import BoxIcon from "../components/boxicon";
import Box09 from "../components/boxicon/Box09";
import ReviewJob09 from "../components/jobs/ReviewJob09";
import Footer from "../components/footer";

//import Banner03 from "../components/banner/Banner03";
import Banner08 from "../components/banner/Banner08";

import Gotop from "../components/gotop";
import { useEffect } from "react";
import { Collapse } from "react-collapse";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { useState } from "react";

Home.propTypes = {};

function Home(props) {
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

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  return (
    <>
      <PopUpForm />
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
                <p>Need help? 24/7</p>
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

      <HeaderHome2 clname="act1" handleMobile={handleMobile} />

      <Banner08 />
      {/*<Banner03 />*/}

      <Partner data={dataPartner} />
      
      <About05 className="review-job-section stc" />

      <ReviewJob09 className="over-flow-hidden review-job-section-five" />
      <IconBox />
      <ReviewJob />

      <About className="review-job-section" />

      <BoxIcon />
      <Box09 />
      

      <Blog01 data={dataBlog} className="news-section" />
      
      <Testimonials
        data={dataTestimonials}
        className="testimonials-section-two"
      />
      <section className="wd-banner-CTA">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12  wow fadeInUp">
              <div className="group-banner-CTA">
                <h3>Investisseurs ?</h3>
                <p>Recevez nos opportunités d'investissement</p>
                <div className="group-btn">
                  <button className="tf-btn">Je m'inscris</button>
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

export default Home;