import React from "react";
import Link from "gatsby-link";
import Davos_logo from "../../images/Davos_logo.svg";
import header_illustration from "../../images/Landing_Illustration-02.png";
import canada_flag from "../../images/maple_leaf.svg";


const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-purple-image">
      <div className="flex sm:flex-wrap items-center justify-between max-w-3xl mx-auto sm:px-0 px-4 pb-8 sm:pb-0">
        <div className="w-1/2 sm:w-full text-white mb-8 pb-8 sm:pb-0 sm:mb-0 sm:px-8">
          <img src={Davos_logo} className="w-64 h-32 -mt-8 sm:w-32" />
          <h1 className="capitalize mb-4 sm:text-2xl sm:text-center ">
            the new standard<br/> in online fundraising
          </h1>
          <p className="leading-normal text-lg mb-8 sm:text-center sm:m-auto sm:w-64 sm:leading-loose">
            Davos is an easy-to-use online fundraising platform created for small and medium sized charities in Canada.
            <img src={canada_flag} className="w-6 sm:leading-none" style={{ position: `relative`, left: "10px", top: "15px"}} />
          </p>
          <button className="bg-purple-light text-white font-bold py-3 px-5 rounded-full capitalize mt-4 mb-8 focus:outline-none focus:shadow-outline sm:m-auto sm:block sm:mt-4"><a className="text-white no-underline" href="#more-info">Learn more</a></button>
        </div>
        <div className='w-4/5 sm:w-full sm:pb-0'>
          <img src={header_illustration} className="relative pin-r pin-b mb-8 pb-8 sm:mb-0 sm:pb-0" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
