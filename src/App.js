import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Home from "./pages/Home";


import Blog from "./pages/Blog";
import Blog_v1 from "./pages/Blog_v1";
import Blog_v3 from "./pages/Blog_v3";
import Blogsingle_v1 from "./pages/Blogsingle_v1";
import Blogsingle_v2 from "./pages/Blogsingle_v2";
import Blogsingle_v3 from "./pages/Blogsingle_v3";

import AboutUs from "./pages/AboutUs";
import Faqs from "./pages/Faqs";
import Termsofuse from "./pages/Termsofuse";
import Pricing from "./pages/Pricing";

import Investor from "./pages/Investor";
import Consultation from "./pages/Consultation";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import ContactUs from "./pages/ContactUs";


import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Preloader from "./components/preloader";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    
    { path: "/aboutus", element: <AboutUs /> },
    
    { path: "/investor", element: <Investor /> },
    { path: "/consultation", element: <Consultation /> },
    
    { path: "/blogsingle_v1", element: <Blogsingle_v1 /> },
    { path: "/blogsingle_v2", element: <Blogsingle_v2 /> },
    { path: "/blogsingle_v3", element: <Blogsingle_v3 /> },
    
    { path: "/blog_v1", element: <Blog_v1 /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog_v3", element: <Blog_v3 /> },

    { path: "/contactus", element: <ContactUs /> },
    
    { path: "/faqs", element: <Faqs /> },
    { path: "/termsofuse", element: <Termsofuse /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/login", element: <Login /> },
    { path: "/createaccount", element: <CreateAccount /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!loading ? (
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default AppWrapper;
