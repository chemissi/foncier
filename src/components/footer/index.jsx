import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer className="footer">
                <div className="top-footer">
                <div className="tf-container">
                    <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <div className="footer-logo">
                        <img src={require ('../../assets/images/logo.png')} alt="images" />
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-8">
                        <div className="wd-social d-flex aln-center">
                        <span>Suivez-nous:</span>
                        <ul className="list-social d-flex aln-center">
                            <li><Link to="https://www.facebook.com/FoncierOnline" target='_blank'><i className="icon-facebook"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/company/foncieronline/" target='_blank'><i className="icon-linkedin2"></i></Link></li>
                            <li><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FFoncierOnline" target='_blank'><i className="icon-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/foncieronline/" target='_blank'><i className="icon-instagram1"></i></Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="inner-footer">
                <div className="tf-container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-cl-1">
                        <div className="icon-infor d-flex aln-center">
                            <div className="icon">
                            <span className="icon-call-calling"><span className="path1"></span><span className="path2"></span><span
                                className="path3"></span><span className="path4"></span></span>
                            </div>
                            <div className="content">
                            <p>Besoin d'aide ?</p>
                            <h6><Link to="tel:0806079379">08 06 07 93 79</Link></h6>
                            </div>
                        </div>
                        <p>Spécialiste de l'estimation gratuite des actifs immobiliers</p>
                        <div className="ft-icon"> <i className="icon-map-pin"></i> 9 rue Anatole de la Forge, 75017 Paris</div>
                        <form action="#" id="subscribe-form">
                            <input type="email" placeholder="Saisissez votre e-mail" required="" id="subscribe-email" />
                            <button className="tf-button" type="submit" id="subscribe-button"><i
                                className="icon-paper-plane-o"></i></button>
                        </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-cl-2">
                        <h6 className="ft-title">
                            Quick Links
                        </h6>
                        <ul className="navigation-menu-footer">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/aboutus">Pour qui ? - Pourquoi ?</Link></li>
                            <li><Link to="/consultation">Consultation</Link></li>
                            <li><Link to="/investor">Investisseurs</Link></li>
                            <li><Link to="/investor">Blog</Link></li>
                            <li><Link to="/contactus">Contactez-nous</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="footer-cl-4">
                        <h6 className="ft-title">
                            Estimation
                        </h6>
                        <ul className="navigation-menu-footer">
                            <li> <Link to="/estimate">Particulier</Link> </li>
                            <li> <Link to="/estimate">Investisseur</Link> </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-6">
                        <div className="footer-cl-3">
                        <h6 className="ft-title">
                            Conditions
                        </h6>
                        <ul className="navigation-menu-footer">
                            <li> <Link to="/termsofuse">Mentions légales</Link> </li>
                            <li> <Link to="/faqs">Protection de données</Link> </li>
                            <li> <Link to="/termsofuse">Politique de confidentialité</Link> </li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="tf-container">
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="bt-left">
                        <div className="copyright">© 2024 FoncierOnline – Tous droits réservés.</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
    );
}

export default Footer;