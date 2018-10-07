import React from "react";
import Link from "gatsby-link";
import DavosSlogan from "../images/Davos_slogan-red.svg";
import InfoSection from "../components/Features/campaign-builder.js";
import featuredImage from "../images/girl_with_dog.png";


const IndexPage = () => (
  <div>
  <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full" style={{height: "610px"}}>
    <div className="flex flex-wrap">
      <div className="w-1/3 text-grey-dark pr-8">
        <h1>We're here to</h1>
        <img src={DavosSlogan} className="w-64 mt-3 mb-8 ml-1" />
        <p className="mb-4 leading-normal mt-8 text-lg">We believe online fundraising should be a walk in the park, where charities and donors can build lasting relationships.</p>
        <p className="mb leading-normal text-lg"><span className="text-purple">Davos</span> empowers you to keep on giving meaning. Expand your audience online and fuel the work that tranforms your community.
        </p>
      </div>
      <div className="w-2/3">
        <img src={featuredImage} className="relative" style={{top:"-300px", left: "-50px"}} />
        <div className="text-purple-dark relative" style={{top: "-340px", left: "50px"}}>
          <h1 className="text-5xl text-center mb-3">It's Easy Peasy</h1>
          <p className="text-xl text-center">for charities like the Barks & Meows Shelter</p>
        </div>
      </div>
    </div>
  </div>
  <div className="featured-item">
    <InfoSection />
  </div>
  </div>
);

export default IndexPage;
