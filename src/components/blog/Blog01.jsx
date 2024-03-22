import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Blog01.propTypes = {};

function Blog01(props) {
  const { data } = props;
  const { className } = props;
  return (
    <section className={className}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title style-2 style-4">
              <div className="group-title">
                <h1>Blog</h1>
                <p>Votre blog de conseils immobiliers</p>
              </div>
            </div>
          </div>

          {data.slice(0, 3).map((idx) => (
            <div key={idx.id} className="col-lg-4 wow fadeInUp">
              <div className="box-latest">
              <Link to="/blog" className="tag">
                <div className="img-latest">
                  <img src={idx.img} alt="FoncierOnline" />
                </div>
                <div className="box-content">
                  <div className="heading">
                    <div className="tag">
                      {idx.cate}
                    </div>
                    <h3>
                      {idx.title}
                    </h3>
                  </div>
                  <ul className="date-post">
                    <li>{/*by {idx.author}*/}</li>
                    <li>
                      <span className="icon-calendar"></span>
                      {idx.time}
                    </li>
                  </ul>
                </div>
                </Link>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default Blog01;
