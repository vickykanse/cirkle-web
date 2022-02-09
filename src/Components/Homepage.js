import React from 'react';
import ReactDOM from 'react-dom';
import Section1 from './homepagecomponent/homepage/slidersection1';
import AboutCompany from './homepagecomponent/aboutcompany/aboutcompanyindex';
import Ourservice from './homepagecomponent/ourservice/ourservice';
import Portfolio from './homepagecomponent/our_portfolio/our_portfolio';
import Ourclient from './homepagecomponent/ourclient/ourclient';

import Footer from './footer/footer';

import ReactFullpage from '@fullpage/react-fullpage';

const anchors = ["0", "1", "2", "3", "4", "5"];

const Homepage = () => (

    <ReactFullpage
        // {...fullpageProps}
        //fullpage options
        anchors={anchors}
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
            console.log("render prop change", state);
            return (
                <>

                    <ReactFullpage.Wrapper>
                        <div className="hero section fp-section-0">
                            <Section1 />
                            <button className="scroll" onClick={() => fullpageApi.moveSectionDown()}>
                                <div className="circle"></div>
                                <div className="arrow">
                                    <div className="arrow-inner"></div>
                                </div>
                            </button>
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
                        <footer className="section footer-main fp-section-5">
                            <Footer></Footer>
                        </footer>
                    </ReactFullpage.Wrapper>
                </>

            );
        }}
    />
);
export default Homepage;
