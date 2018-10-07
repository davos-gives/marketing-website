import React from "react";
import Link from "gatsby-link";
import Davos_logo from "../../images/Davos_logo.svg";
import header_illustration from "../../images/landing_illustration-02.png"


const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-purple-image">
      <div className="flex items-center justify-between max-w-3xl mx-auto px-4 pb-8">
        <div className="w-1/2 text-white mb-8 pb-8">
          <img src={Davos_logo} className="w-64 h-32 -mt-8" />
          <h1 className="capitalize mb-4">
            the new standard<br/> in online fundraising
          </h1>
          <p className="leading-normal text-lg mb-8">
            Davos is an easy-to-use online fundraising platform created for small and medium sized charities in Canada.
          </p>
          <button className="bg-purple-light text-white font-bold py-3 px-5 rounded-full capitalize mt-4 mb-8 focus:outline-none focus:shadow-outline">Learn more</button>
        </div>
        <div className='w-4/5'>
          <img src={header_illustration} className="relative pin-r pin-t mb-8 pb-8" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
