import React from "react";
import Link from "gatsby-link";
import DavosSlogan from "../images/Davos_slogan-red.svg";


const IndexPage = () => (
  <div className="">
    <div className="w-1/3 text-grey-dark">
      <h1>We are here to</h1>
      <img src={DavosSlogan} className="w-64 mt-3 mb-8 ml-1" />
      <p className="mb-4 leading-normal mt-8">We believe online fundraising should be a walk in the park, where charities and donors can build lasting relationships.</p>
      <p className="mb leading-normal"><span className="text-purple">Davos</span> empowers you to keep on giving meaning. Expand your audience online and fuel the work that tranforms your community.
      </p>
    </div>
  </div>

);

export default IndexPage;
