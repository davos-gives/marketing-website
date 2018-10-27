import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";
import Favicon from "../images/davos_favicon.png";
import featured_image from "../images/davos_share.png";


const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest overflow-x-hidden">
  <Helmet
title="Davos | Give Meaning"
meta={[
    { name: 'description', content: 'Davos is an easy-to-use online fundraising platform created for small and medium sized charities in Canada.' },
    { name: 'keywords', content: 'Canada, Davos, Fundraising, Non-Profits, NPO, Charities, Online Fundraising' },
    { property: "og:url", content: "https://davos.gives" },
    { property: "og:title", content: "Davos - Give Meaning" },
    { property: "og:description", content: "Davos is an easy-to-use online fundraising platform created for small and medium sized charities in Canada." },
    { property: "og:image", content: `${featured_image}`},
]}
link={[
    { rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` }
]}
/>
    <Header />
    <div className="">
      {children()}
    </div>
  </div>

);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
