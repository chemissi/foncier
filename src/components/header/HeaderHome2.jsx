import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import avt from "../../assets/images/user/avatar/image-01.jpg";
import { Link, NavLink } from "react-router-dom";

HeaderHome2.propTypes = {};

function HeaderHome2({ clname = "", handleMobile }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  return (
    <header
      id="header"
      className={`header header-default ${scroll ? "is-fixed is-small" : ""}`}
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sticky-area-wrap">
              <div className="header-ct-left">
                <div id="logo" className="logo">
                  <Link to="/">
                    <img
                      className="site-logo"
                      id="trans-logo"
                      src={logo}
                      alt="Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="header-ct-center st-1">
                <div className="nav-wrap">
                  <nav id="main-nav" className="main-nav">
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
              </div>
              <div className="header-ct-right st-1">
                <div className="header-customize-item help">
                  <Link to="/termsofuse">
                    <span className="icon-help-circle"></span>
                  </Link>
                </div>
                               
                <div className="header-customize-item button">
                  <Link to="/">Connexion</Link>
                </div>
              </div>
              <div className="nav-filter" onClick={handleMobile}>
                <div className="nav-mobile">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome2;
