import React from "react";
import HeaderHome2 from "../components/header/HeaderHome2";
import Footer from "../components/footer";
import Blog01 from "../components/blog/Blog01";
import dataBlog from "../assets/fakeData/dataBlog";

import { Link, NavLink } from "react-router-dom";
import Gotop from "../components/gotop";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import { useState } from "react";

Blogsingle_v1.propTypes = {};

function Blogsingle_v1(props) {
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

      <section className="blog-detail-section">
        <div className="tf-container">
          <div className="wrap-blog-detail blog-detail blog-detail-side-bar-content">
            <div className="widget-blog-1">
              <div className="content">
                <span className="sub-title">Makerting</span>
                <h3 className="main-heading">
                  Locaux d'activité et entrepôts logistiques, quelles différences ?
                </h3>
                <ul className="meta">
                  <li className="author">
                    <span>by</span>Avitex
                  </li>
                  <li className="time">
                    <span className="icon-calendar"></span> 07-11-2023
                  </li>
                </ul>
              </div>
              <div className="image">
                <img
                  src={require("../assets/images/blog/blog-detail-01.jpg")}
                  alt=""
                />
              </div>
            </div>
            <p>
              Les notions de locaux d'activité et d'entrepôts logistiques sont toutes deux liées au secteur immobilier dit “non résidentiel”. En France, les entrepôts et plateformes logistiques (EPL) représentent 78 millions de m².  Pour ce qui concerne les locaux d'activités, notre pays compte un parc immobilier de 18 millions de m² rien que pour les surfaces commerciales. Locaux d'activité et entrepôts logistiques, quelles différences ? Comment valoriser ces actifs immobilier au mieux ? Peut-on les transformer en habitation ? Tour d'horizon de ces biens aux caractéristiques spécifiques.
            </p>
            <h5>Caractéristique des locaux d'activités et des entrepôts logistiques</h5>
            <p>
            Les locaux d'activité et les entrepôts logistiques désignent des biens immobiliers dits “non résidentiels”.  Voici leurs principales caractéristiques. Les locaux d'activité Le local d'activités désigne un bâtiment ou une partie d'un bâtiment affecté à l'exercice d'une activité artisanale, industrielle ou commerciale. Le local d'activité constitue un espace fonctionnel se présentant généralement sous l'image de boutiques, magasins, bureaux professionnels, etc. L'exploitation d'un local d'activité se fait par achat ou par location (bail professionnel ou commercial). Le local d'activité comprend tous les matériels et outillages utiles au fonctionnement d'une entreprise. Dans la majorité des cas, il se situe géographiquement dans les zones urbaines et périurbaines. La répartition des investissements en immobilier d'entreprise en France est la suivante : bureau 59% actifs industriels 25% commerces  12% hôtellerie 4% (Source : BNP PARIBAS Real Estate)
            </p>
            
            <h5>Les entrepôts logistiques</h5>
            <p>
            Étymologiquement, l'entrepôt correspond à un « lieu de dépôt ». Ce terme désigne un bâtiment ou une zone dont la finalité est de stocker des produits ou des marchandises, quelle que soit leur nature. L'entrepôt se caractérise par sa grande taille. En France, la taille moyenne d'un entrepôt logistique est de 18 500 m². Les plus grands pouvant couvrir jusqu'à 140.000 m². Les praticiens les qualifient d'”entrepôts XXL”. Il existe différents types d'entrepôts logistiques : Entrepôt de production Destiné à stocker des matières premières ou produits finis, le conditionnement (cartons, etc.) intervenant dans la chaîne de production Entrepôt de distribution : Consacré au stockage des produits avant leur livraison en fin de chaîne de production ; Entrepôt terminal : Pour les produits invendus ou en fin de vie ; Etc. Les bâtiments logistiques sont soumis au respect de la réglementation des Installations classées pour la protection de l'environnement (ICPE). Chaque installation fait l'objet d'une autorisation préfectorale comportant ses caractéristiques et les prescriptions à respecter par l'exploitant (volume, nature du stockage, etc.). Les entrepôts logistiques se situent en général dans les zones périphériques des villes à cause de leur taille gigantesque, souvent à proximité d'autoroutes et/ou de zones de desserte
            </p>
            <h5>Achat ou location, quelle est la meilleure option ?</h5>
            <p>
            Un choix stratégique s'impose entre acquisition ou bail pour les deux types de biens immobiliers. Un choix stratégique Coût, rentabilité, retour sur investissement… sont autant de critères à prendre en compte. Ainsi, s'il est souhaitable pour les entreprises stables d'acheter un local d'activité ou un entrepôt logistique, la location est une solution alternative. Les conditions, le loyer et les frais varient selon le type de bail (commercial, professionnel, précaire, etc.), l'emplacement, la surface disponible et/ou divisible dans laquelle se situe la structure à louer.
            </p>
            <h5>L'importance de la localisation</h5>
            <p>
            La zone géographique est un critère de détermination à prendre en compte dans le choix entre la location ou l'achat. Suivant les régions, l'offre et la demande varient. Le loyer sera également différent selon que vous recherchez des locaux ou un entrepôt logistique à Paris, Bordeaux, Amiens ou Lorient. De nombreuses annonces de location existent que ce soit pour des locaux d'activité ou des entrepôts logistiques. Il est néanmoins conseillé de se faire accompagner par un professionnel dans les différentes démarches afférentes à la recherche de ce type de biens, ainsi que dans l'élaboration du contrat de bail.
            </p>
            <h5>Peut-on transformer un local d'activités ou un entrepôt logistique en locaux d'habitation ?</h5>
            <p>
            Vous envisagez de transformer un local d'activité ou un entrepôt en zone résidentielle ? Attention ! C'est possible, mais des règles s'imposent. Des conditions strictes Cette opération consiste en un « changement de destination » et répond à  des conditions strictes. Pour cela, il vous faut obtenir au préalable une autorisation administrative. Un permis de construire, Si ce changement de destination s'accompagne de travaux pour modifier la structure, il vous faudra également un permis de construire Article R 421-14 du Code de l'urbanisme).
            </p>
            <h5>Bon à savoir</h5>
            <p>
            Destination Un local d'activité désigne les espaces dédiés à l'exercice d'une activité professionnelle, depuis les fonctions commerciales jusqu'aux fonctions administratives, en passant par des zones de création ou de fabrication (artisanat). L'entrepôt logistique est quant à lui destiné à entreposer des marchandises des produits finis ou semi-finis qui seront transportés ensuite vers une autre destination. Superficie Un local d'activité est généralement de taille relativement restreinte. Un entrepôt logistique se singularise par son caractère gigantesque pouvant couvrir de milliers de m². Localisation Les locaux d'activités se rencontrent généralement en ville ou dans des zones périurbaines, alors que les entrepôts logistiques se situent en périphérie. Vous en savez plus à présent sur la distinction entre locaux d'activité et entrepôts logistiques. Pour optimiser votre valorisation d'actifs, n'hésitez pas à contacter FoncierOnline !
            </p>

            <div className="tag-social">
              <div className="widget-popular-tags">
                <span className="main-title">Tag:</span>
                <ul className="widget-popular-tags-wrap">
                  <li className="widget-popular-tags-item">
                    <Link to="#">Entrepôts </Link>
                  </li>
                  <li className="widget-popular-tags-item">
                    <Link to="#">Achat</Link>
                  </li>
                  <li className="widget-popular-tags-item">
                    <Link to="#">Location</Link>
                  </li>
                </ul>
              </div>
              <div className="wd-social d-flex aln-center">
                <span>Partager l'article:</span>
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
                      <i className="icon-instagram1"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-links stc">
              <div className="post-navigation previous-post">
                <div className="title-post">
                  <Link to="#" rel="prev">
                    Précédent
                  </Link>
                </div>
                <p>Vendre son terrain à un lotisseur: avantages, méthodes </p>
              </div>
              <div className="post-navigation next-post">
                <div className="title-post text-end">
                  <Link to="#" rel="prev">
                  Suivant
                  </Link>
                </div>
                <p>Comment déterminer la valeur d'un actif immobilier ?</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      <Blog01 data={dataBlog} className="inner-news-section" />
      <Footer />
      <Gotop />
    </>
  );
}

export default Blogsingle_v1;
