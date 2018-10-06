import React from "react";
import Davos_logo from "../../images/Davos_logo.svg";
import Davos_slogan from "../../images/Davos_slogan.svg";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";

const Footer = () => (
  <div>
    <div className="bg-purple-light py-20">
    <div className="max-w-3xl mx-auto p4 flex">
      <div className="w-1/3 text-white ml-16 text-center text-xl">
        <h1>Discover if Davos <br/>
        is right for you!
        </h1>
      </div>
      <div className="w-1/3 mx-auto">
      <p className="text-white text-lg leading-normal">Request early access and get our latest updates and news before anyone else!</p>

      <form className="pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input className="shadow appearance-none border rounded-full w-full py-2 px-4 text-purple-dark leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
        </div>
        <div className="mb-4">
          <input className="shadow appearance-none border rounded-full w-full py-2 px-4 text-purple-dark leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Address" />
        </div>
      <div className="w-full">
        <button className="w-full rounded-full bg-purple-darker uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wide" type="button">
          Get early access
        </button>
      </div>
      </form>
      </div>
      </div>
    </div>

    <div className="bg-purple-darker">
      <div className="flex justify-between items-center max-w-3xl mx-auto p-4 md:p-8 text-sm">
        <div className="text-white leading-normal w-1/3">
          <img src={Davos_logo} className="w-32 mt-18 mb-8" />
          <p>A proudly Canadian startup currently in a tiny room at 685 Great Northern Way, Vancouver, BC V5T 0C6</p>
        </div>
        <div className="">
          <img src={Davos_slogan} className="w-32"/>
        </div>
        <div className="flex">
        <p className="text-white flex-1">
          Contact Us! <a className="text-white no-underline font-bold" href="mailto:info@davos.gives">info@davos.gives</a>
        </p>
        <div className="flex flex-wrap flex-1">
          <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center mr-3"><img src={Facebook} className="w-4"/></div>
          <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center mr-3"><img src={Twitter} className="w-4" /></div>
          <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center"><img src={Instagram} className="w-4" /></div>
        </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
