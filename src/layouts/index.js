import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest overflow-x-hidden">
    <Helmet
      title="Davos | Give meaning"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div className="">
      {children()}
    </div>
    <Footer />
  </div>

);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
