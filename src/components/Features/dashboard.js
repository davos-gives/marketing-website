import React from "react";
import Davos_logo from "../../images/Davos_logo.svg";
import Davos_slogan from "../../images/Davos_slogan.svg";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";
import Illustration from "../../images/Landing_Illustration-03.png";
import laptop from "../../images/laptop1.png";

const Dashboard = () => (
  <div className="flex" style={{ marginTop: "300px"}}>
    <div className="w-1/3 mt-8 shadow-lg rounded-lg" style={{height: "80%"}}>
      <div className="my-8" style={{ height: "250px"}}>
        <img src={Illustration} className="w-80 mt-18 mb-8 relative donor-profile-illustration" style={{ top: `-200px`, left: "75px"}}/>
        <p className="text-purple text-xl w-2/3 text-center leading-loose mx-auto relative" style={{ top: `-200px`}}>"No more countless hours trying to set up a donation form that looks like our website"</p>
      </div>
      <div className="text-white bg-orange px-10 mx-auto py-8 rounded-b-lg">
      <h3 className="capitalize">Donation campaign builder</h3>
      <p className="mb-4 mt-4 leading-loose">Quickly design your campaign using our modern templates. Decide on the fonts, colour, images, content and gift ranges that best suit your needs.
      </p>
      <p className="mb-4 mt-4 leading-loose">Want to personalize even further or create your own template? You are always in control with our advanced settings.</p>
      </div>
    </div>

    <div className="w-2/3">
      <img src={laptop} className="mt-18 mb-8 relative donor-profile-laptop" style={{ top: `-50px`, width: "1050px", maxWidth: "1050px", left: "-53px"}}/>
      <div className="flex content-between self-start relative mx-16" style={{top: "-100px" }}>
        <div className="flex flex-wrap flex-auto self-center">
          <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-purple"></span>
          <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey"></span>
          <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey"></span>
        </div>
        <div className="">
          <button className="bg-white flex-none w-2/3 ml-16 text-purple border border-purple text font-bold py-2 px-8 rounded-full capitalize mt-8 mb-4">Next</button>
          <p className="text-purple font-bold text-right w-full leading-loose">Understand how your <br/> campaigns are performing</p>
        </div>
      </div>
    </div>

  </div>
);

export default Dashboard;
