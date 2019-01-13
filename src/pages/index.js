import React from "react";
import Link from "gatsby-link";
import DavosSlogan from "../images/Davos_slogan-red.svg";
import InfoSection from "../components/Features/campaign-builder.js";
import featuredImage from "../images/girl_with_dog.png";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
  <div className="pull-up">
  <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 sm:py-0 md:p-8 sm:px-0 w-full top-wrapper">
    <div className="flex flex-wrap sm:flex-col-reverse sm:flex-col md:flex-col md:flex-col-reverse">
      <div className="w-1/3 sm:w-full text-grey-dark pr-8 sm:px-8 sm:text-sm sm:text-center md:mx-auto md:w-2/3 md:text-center give-meaning">
        <h1 className="sm:m-auto sm:text-center md:text-center">We're here to</h1>
        <img src={DavosSlogan} className="w-64 sm:w-48 mt-3 mb-8 ml-1 sm:m-auto sm:mb-0 sm:mt-2 md:mx-auto" />
        <p className="mb-4 leading-normal mt-8 text-lg sm:text-left md:text-left">We believe online fundraising should be a walk in the park, where charities and donors can build lasting relationships.</p>
        <p className="mb leading-normal text-lg sm:text-left sm:mb-8 md:text-left"><span className="text-purple">Davos</span> empowers you to keep on giving meaning. Expand your audience online and fuel the work that transforms your community.
        </p>
      </div>
      <div className="w-2/3 sm:w-full md:mx-auto">
        <img src={featuredImage} className="relative human-picture md:ml-8" style={{top:"-300px", left: "-50px"}} />
      </div>
    </div>
  </div>
  <div className="featured-item sm:mt-8">
    <div className="text-purple-dark relative sm:text-center sm:mx-auto sm:w-3/4 sm:leading-normal easy-peasy">
      <h1 className="text-5xl text-center mb-3 sm:text-xl sm:" id="more-info">It's Easy Peasy</h1>
      <p className="text-xl text-center">for charities like the Barks & Meows Shelter</p>
    </div>
    <InfoSection />
  </div>
  </div>
  <Footer />
  </div>
);

export default IndexPage;
