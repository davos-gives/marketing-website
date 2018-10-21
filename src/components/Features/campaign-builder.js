import React, { Component } from "react";
import Link from "gatsby-link";
import Davos_logo from "../../images/Davos_logo.svg";
import Davos_slogan from "../../images/Davos_slogan.svg";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";
import IllustrationBuilder from "../../images/Landing_Illustration-03.png";
import IllustrationDashboard from "../../images/Landing_Illustration-04.png";
import IllustrationProfile from "../../images/Landing_Illustration-05.png";

import laptop from "../../images/builder_laptop.png";
import DonorLaptop from '../../images/Donor_Macbook.png';
import StatsLaptop from '../../images/Stats_laptop.png';
import StatsScreen2 from '../../images/Stats_laptop_b.png';

class InfoSection extends Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {
    featuredItem: 'design'
  }

  updateState(state) {
    this.setState({
      featuredItem: state
    });
  }


  render() {
    if(this.state.featuredItem === 'design'){
      return (
        <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full">
          <div className="flex" style={{ marginTop: "-260px"}}>
            <div className="w-1/3 mt-8 shadow-lg rounded-lg bg-white" style={{height: "80%"}}>
              <div className="my-8" style={{ height: "250px"}}>
                <img src={IllustrationBuilder} className="w-80 mt-18 mb-8 relative donor-profile-illustration" style={{ top: `-200px`, left: "75px"}}/>
                <p className="text-purple-light text-xl w-2/3 text-center leading-normal mx-auto relative" style={{ top: `-200px`}}>"No more countless hours trying to set up a donation form that looks like our website"</p>
              </div>
              <div className="text-white bg-teal px-12 mx-auto py-12 rounded-b-lg">
              <h3 className="capitalize">Donation campaign builder</h3>
              <p className="mb-4 mt-4 leading-loose text-lg">Quickly design your campaign using our modern templates. Decide on the fonts, colour, images, content and gift ranges that best suit your needs.
              </p>
              <p className="mb-4 mt-4 leading-loose text-lg">Want to personalize even further or create your own template? You are always in control with our advanced settings.</p>
              </div>
            </div>

            <div className="w-2/3">
              <img src={laptop} className="mt-18 mb-8 relative donor-profile-laptop" style={{ top: `-40px`, height: "550px", maxWidth: "1000px", left: "-40px"}}/>


              <div className="flex content-between self-start relative mx-16" style={{top: "-100px" }}>
                <div className="flex flex-wrap flex-auto self-center">
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-teal"></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("dashboard")}></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("profile")}></span>
                </div>
                <div className="w-64">
                  <button className="flex-none w-2/3 ml-16 text-purple border border-purple text font-bold py-2 px-8 rounded-full capitalize mt-8 mb-4 focus:outline-none focus:shadow-outline float-right" onClick={() => this.updateState("dashboard")}>Next</button>
                  <p className="text-purple font-bold text-right w-full leading-loose">Understand how your <br/> campaigns are performing</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
    }

    if(this.state.featuredItem === 'dashboard'){
      return (
        <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full">
          <div className="flex" style={{ marginTop: "-260px"}}>
            <div className="w-1/3 mt-8 shadow-lg rounded-lg bg-white" style={{height: "80%"}}>
              <div className="my-8" style={{ height: "250px"}}>
                <img src={IllustrationDashboard} className="w-80 mt-18 mb-8 relative donor-profile-illustration" style={{ top: `-200px`, left: "75px"}}/>
                <p className="text-purple-light text-xl w-2/3 text-center leading-normal mx-auto relative" style={{ top: `-200px`}}>"The beauty of it is that's all in one place!"</p>
              </div>
              <div className="text-white bg-orange px-12 mx-auto py-12 rounded-b-lg">
              <h3 className="capitalize">Charity Dashboard</h3>
              <p className="mb-4 mt-4 leading-loose text-lg">Get a clear understanding of how your campaigns perform and why they do so. Your dashboard is a quick snapshot of your total Funds raised and where the support is coming from - filterable by year or month.
              </p>
              <p className="mb-4 mt-4 leading-loose text-lg">All in one place. Straightforward and updated in real time.</p>
              </div>
            </div>

            <div className="w-2/3 relative">
            <div className="relative" style={{height: "585px"}}>
              <img src={StatsLaptop} className="mt-18 mb-8 absolute donor-profile-laptop" style={{ top: `-40px`, height: "550px", maxWidth: "1000px", left: "-40px", zIndex: '10'}}/>
                <img src={StatsScreen2} className="mt-18 mb-8 absolute donor-profile-laptop" style={{ top: `30px`, height: "450px", maxWidth: "1000px", right: "-300px"}}/>
              </div>
              <div className="flex content-between self-start relative mx-16" style={{top: "-100px" }}>
                <div className="flex flex-wrap flex-auto self-center">
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("design")}></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-orange"></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("profile")}></span>
                </div>
                <div className="w-64">
                  <button className="flex-none w-2/3 ml-16 text-purple border border-purple text font-bold py-2 px-8 rounded-full capitalize mt-8 mb-4 focus:outline-none focus:shadow-outline float-right" onClick={() => this.updateState("profile")}>Next</button>
                  <p className="text-purple font-bold text-right w-full leading-loose">Build strong relationships<br />with your supporters</p>
                </div>
              </div>
            </div>
            </div>
          </div>
      )
    }

    if(this.state.featuredItem === 'profile'){
      return (
        <div className="flex flex-col flex-1 md:justify-center max-w-3xl mx-auto px-4 py-8 md:p-8 w-full">
          <div className="flex" style={{ marginTop: "-260px"}}>
            <div className="w-1/3 mt-8 shadow-lg rounded-lg bg-white" style={{height: "80%"}}>
              <div className="my-8" style={{ height: "250px"}}>
                <img src={IllustrationProfile} className="w-80 mt-18 mb-8 relative donor-profile-illustration" style={{ top: `-200px`, left: "75px"}}/>
                <p className="text-purple-light text-xl w-2/3 text-center leading-normal mx-auto relative" style={{ top: `-200px`}}>"Now i'm able to really know our supporters and establish long-lasting connections"</p>
              </div>
              <div className="text-white bg-yellow px-12 mx-auto py-12 rounded-b-lg">
              <h3 className="capitalize">Donor profile</h3>
              <p className="mb-4 mt-4 leading-loose text-lg">We make converstions possible between you and your supporters possible.
              </p>
              <p className="mb-4 mt-4 leading-loose text-lg">Send thank you messages, create tags and notes, and get full insight into giving history. We make it easy for you to really get to know your donors and build lasting relationships.</p>
              </div>
            </div>

            <div className="w-2/3">
              <img src={DonorLaptop} className="mt-18 mb-8 relative donor-profile-laptop" style={{ top: `-40px`, height: "550px", maxWidth: "1000px", left: "-40px"}}/>
              <div className="flex content-between self-start relative mx-16" style={{top: "-100px" }}>
                <div className="flex flex-wrap flex-auto self-center">
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("design")}></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-grey" onClick={() => this.updateState("dashboard")}></span>
                  <span className="rounded-full inline-block h-3 w-3 items-center mx-1 bg-yellow"></span>
                </div>
                <div className="w-64">
                  <button className="flex-none w-2/3 ml-16 text-purple border border-purple text font-bold py-2 px-8 rounded-full capitalize mt-8 mb-4 focus:outline-none focus:shadow-outline float-right" onClick={() => this.updateState("design")}>Next</button>
                  <p className="text-purple font-bold text-right w-full leading-loose">Get your online<br />fundraising up and running</p>
                </div>
              </div>
            </div>
            </div>
          </div>
      )
    }
  }
}

export default InfoSection;
