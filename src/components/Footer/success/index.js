import React from "react";
import Davos_logo from "../../../images/Davos_logo.svg";
import Davos_slogan from "../../../images/Davos_slogan.svg";
import Facebook from "../../../images/facebook.png";
import Twitter from "../../../images/twitter.png";
import Instagram from "../../../images/instagram.png";
import canada_flag_red from "../../../images/maple_leaf-red.svg";
import VC from "../../../images/VentureConnection_LOGO.png";


const Footer = () => (
  <div className="">
    <div className="py-5 footer-padded bg-purple-footer-image relative z-10 submitted">
    <div className="max-w-3xl mx-auto p4 flex pt-15 sm:flex-wrap sm:flex-col md:flex-wrap md:flex-col">
      <div className="w-1/3 text-white ml-4 mr-8 text-center text-xl mt-12 sm:w-full sm:mx-auto md:w-3/4 md:text-left md:mx-auto md:pt-8">
        <h1 className="sm:text-2xl md:mb-8 md:pt-8">Discover if Davos <br/>
        is right for you!
        </h1>
      </div>
      <div className="w-1/3 mx-auto mt-2 pt-2 sm:w-full md:w-3/4 md:text-left md:mx-auto my-12">
      <p className="text-white text-lg leading-normal sm:text-center sm:px-8">Request early access and get our latest updates and news before anyone else!</p>

      <form className="pt-6 pb-8 mb-4 sm:px-8 sm:mt-8 mt-12" id="submitted">
      <div className="w-full">
        <button className="w-full rounded-full bg-teal uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-wide" type="submit">
          Success!
        </button>
      </div>
      </form>
      </div>
      </div>
    </div>

    <div className="sm:text-center lg:pb-8 lg:pt-8 bg-purple-darkest relative footer">
      <div className="flex justify-between items-end max-w-3xl mx-auto p-4 md:pl-8 text-sm sm:flex-wrap sm:flex-col md:items-right">
        <div className="text-white leading-normal w-1/3 sm:w-full sm:leading-loose md:w-1/2 md:ml-8 sm:pb-8">
          <img src={canada_flag_red} className="w-6 mb-4"/>
          <p className="leading-loose w-4/5 sm:w-full">A proudly Canadian Startup currently working with SFU's Coast Capital Savings Venture Connection.</p>
          <a href="http://www.sfu.ca/io/venture/venture-connection.html" target="_blank"><img src={VC} className="w-4/5"/></a>

        </div>
        <div className="pb-8">
          <div className="flex items-center mb-6">
            <img src={Davos_logo} className="w-48 mr-8 md:w-32" />
            <img src={Davos_slogan} className="w-1/3"/>
          </div>
          <div className="flex items-center sm:flex-wrap sm:flex-col md:w-3/4">
            <p className="text-white flex-1 sm:mb-4">
              Contact Us! <a className="text-white no-underline font-bold" href="mailto:info@davos.gives">info@davos.gives</a>
            </p>
            <div className="flex flex-wrap flex-1 sm:justify-center sm:mb-8 md:justify-end">
              <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center mr-3"><a href="https://www.facebook.com/davos.gives/" target="_blank"><img src={Facebook} className="w-4 pt-1"/></a></div>
              <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center mr-3"><a href="https://twitter.com/Davos_Gives" target="_blank"><img src={Twitter} className="w-4 pt-1" /></a></div>
              <div className="bg-white text-white rounded-full h-8 w-8 flex items-center justify-center"><a href="https://www.instagram.com/davos.gives/" target="_blank"><img src={Instagram} className="w-4 pt-1" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default Footer;
