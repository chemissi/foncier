import React from "react";
import PropTypes from "prop-types";
import HeaderHome2 from "../components/header/HeaderHome2";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Gotop from "../components/gotop";
import Term from "../components/term";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header4 from "../components/header/Header4";

Termsofuse.propTypes = {};

function Termsofuse(props) {
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
            <Link to="/">CONNEXION</Link>
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
                  <Link to="https://www.facebook.com/FoncierOnline" target='_blank'>
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/company/foncieronline/" target='_blank'>
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FFoncierOnline" target='_blank'>
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/foncieronline/" target='_blank'>
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <HeaderHome2 clname="act1" handleMobile={handleMobile} />

      <Breadcrumb title="Protection des données" />
      <Term />
      <Footer />
      <Gotop />
    </>
  );
}

export default Termsofuse;
