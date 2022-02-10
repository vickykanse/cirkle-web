import React, { Component } from 'react';
import Section1 from './homepagecomponent/homepage/slidersection1';
import AboutCompany from './homepagecomponent/aboutcompany/aboutcompanyindex';
import Ourservice from './homepagecomponent/ourservice/ourservice';
import Portfolio from './homepagecomponent/our_portfolio/our_portfolio';
import Ourclient from './homepagecomponent/ourclient/ourclient';

import Footer from './footer/footer';
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props


class Homepage extends Component {
  
    render() {
        // const anchors = ["0", "1", "2", "3", "4", "5"];
      return (
        <div id="fullpage-wrapper">
        <div className="hero section fp-section-0">
            <Section1 />
            {/* <button className="scroll" onClick={() => fullpageApi.moveSectionDown()}>
                <div className="circle"></div>
                <div className="arrow">
                    <div className="arrow-inner"></div>
                </div>
            </button> */}
        </div>
        <section className="section home-about fp-section-1">
            <AboutCompany />
        </section>
        <section className="our-services section  fp-section-2">
            <Ourservice />
        </section>
        <section className="cm_portfolio_main section  fp-section-3">
            <Portfolio />
        </section>
        <section className="cm_our_clients section  fp-section-4">
            <Ourclient />
        </section>
        <footer className="section footer-main active inner-page-footer">
            <Footer></Footer>
        </footer>
      </div>
      );
    }
  }
  
  export default Homepage;

