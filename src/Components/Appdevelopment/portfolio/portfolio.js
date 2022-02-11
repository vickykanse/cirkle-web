import React, { Component } from 'react';
import "./portfolio.css";
import Hb from "../../../images/appdevelopment/hb-logo.png"
import iphonex from "../../../images/appdevelopment/iphone-x-wireframe-design-for-illustrator2.png"
import Hearbasker from "../../../images/appdevelopment/heaer-basker.png"
import s2 from "../../../images/appdevelopment/shape-55.svg"
import s3 from "../../../images/appdevelopment/shape-56.svg"
import s4 from "../../../images/appdevelopment/shape-57.svg"
import s6 from "../../../images/appdevelopment/shape-59.svg"
import s8 from "../../../images/appdevelopment/shape-61.svg"
import s9 from "../../../images/appdevelopment/shape-62.svg"
import robote from "../../../images/appdevelopment/robot.svg"
import iphoneright from "../../../images/appdevelopment/rightt.png"
import rns from "../../../images/appdevelopment/rns.png"
import vpn from "../../../images/appdevelopment/vpn-logo.png"
import vs from "../../../images/appdevelopment/vs-logo.png"
import vsimg from "../../../images/appdevelopment/video-status.png"
import code2 from "../../../images/appdevelopment/code2_gif-1.gif"
import dellemc from "../../../images/appdevelopment/dellemc.jpg"
import dell from "../../../images/appdevelopment/dell.png"
import apple from "../../../images/appdevelopment/brand.svg"

class portfolio extends Component {
    render() {
        return (
            <section data-header-group="black_header" className="cm-app-portfolio">
                <div className="home-portfolio" data-home-project="1">
                    <div className="project-clip">
                        <div className="container">
                            <div className="portfolio-left">
                                <div className="company-portfolio-left-info-box">
                                    <div className="portfolio-info-head">
                                        <div className="logo-head-wrp">
                                            <div className="portfolio-logo  aos" data-aos="zoom-in">
                                                <img src={Hb} alt="healer basker" />
                                            </div>
                                            <div className="portfolio-content-wraper aos" data-aos="fade-in">
                                                <h2>Healer Baskar </h2>
                                                <p>AnatomictherapyHealth & Fitness</p>
                                            </div>
                                        </div>
                                        <div className="portfolio-info aos" data-aos="fade-in">
                                            <p>
                                                This project built on the react-native for the Android platform and iOS platform and also backend(Admin panel and REST API) are implemented in PHP7 platform using MySQL & Nginx server. Thisproject build for the motivational speaker event booking who can book event. In this app, list of allupcoming event will display and details of events like description, event date/time, price , andlocation. User can see past event images and video. Also can listen audio in the app and candownload events images, videos and audio.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--portfolio-left--> */}
                            <div className="mobile_wrapper">
                                <div className="mobile-frame">
                                    <img src={iphonex}
                                        alt="MOBILE APP DEVELOPMENT" />
                                </div>
                                <div className="mobile-video">
                                    <img src={Hearbasker} alt="myphone" />
                                </div>
                            </div>
                        </div>
                        <div className="right-portfolio-wraper right-portfolio-wrap1">
                            <div className="right-poin-text-wraper">
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Event screen</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Video screen</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Donate screen</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Photos screen</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Audio screen</p>
                                </div>
                                <ul className="app-download-link-wraper aos" data-aos="fade-up">
                                    <li>
                                        <a href="https://play.google.com/store/apps/details?id=com.healerbasker&hl=en_IN" target="_blank" rel="noopener noreferrer"><img src={robote} alt=""/></a>
                                    </li>
                                    {/* <!-- <li>
                                            <a href="portfolio"><img src="img/brand.svg"></a>
                                </li> --> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--home-portfolio--> */}
                <div className="home-portfolio" data-header-group="white_header" data-home-project="2">
                    <div className="project-clip">
                        <div className="container">
                            <div className="service-block">
                                <div className="svgshapes">
                                    <img src={s2} alt="" className="shape-four" />
                                    <img src={s3} alt="" className="shape-five" />
                                    <img src={s4} alt="" className="shape-six" />
                                    <img src={s6} alt="" className="shape-eight" />
                                    <img src={s8} alt="" className="shape-ten" />
                                    <img src={s9} alt="" className="shape-eleven" />
                                </div>
                            </div>
                            <div className="portfolio-left">
                                <div className="right-poin-text-wraper">
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>Device installed application list.</p>
                                    </div>
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>VPN list screen</p>
                                    </div>
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>Country wise VPN list</p>
                                    </div>
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>User can show IP address and bandwidth detail of selected VPN.</p>
                                    </div>
                                    <ul className="app-download-link-wraper aos" data-aos="fade-up">
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.rns.buddyvpnprov&hl=en_IN" className="app-download-link2">
                                                <img src={robote} />
                                            </a>
                                        </li>
                                        {/* <!-- <li>
                                            <a target="_blank" href="#" className="app-download-link2">
                                                <img src="img/brand.svg">
                                        </a>
                                    </li> --> */}
                                    </ul>
                                </div>
                            </div>
                            {/* <!--portfolio-left--> */}
                            <div className="mobile_wrapper">
                                <div className="mobile-frame">
                                    <img src={iphoneright} alt="MOBILE APP" />
                                </div>
                                {/* <!--mobile-frame--> */}
                                <div className="mobile-video">
                                    <img src={rns} alt="myphone1" />
                                </div>
                            </div>
                        </div>
                        <div className="right-portfolio-wraper portfolio-left right-portfolio-wrap2">
                            <div className="company-portfolio-left-info-box">
                                <div className="portfolio-info-head">
                                    <div className="logo-head-wrp">
                                        <div className="portfolio-logo1 aos" data-aos="zoom-in">
                                            <img src={vpn} alt="RNS Free Residential VPN" />
                                        </div>
                                        <div className="portfolio-content-wraper aos" data-aos="fade-in">
                                            <h2>RNS Free Residential VPN</h2>
                                            <p>RNSVPN Tools</p>
                                        </div>
                                    </div>
                                    <div className="portfolio-info aos" data-aos="fade-up">
                                        <p>
                                            The RNS Free Residential VPN Android app provides users with 100% free access to vpn servers from across the globe. There is never a fee to access these servers, we never ask for your personal information, or even your email address. Our commitment to users is a 100% free, safe, and secure environment for their Android devices. Users have free and instant access to vpn servers from every region of the globe. There are no vpn bandwidth restrictions ever and users can use the servers as much or as little as they like.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--home-portfolio--> */}
                <div className="home-portfolio" data-home-project="3">
                    <div className="project-clip">
                        <div className="container">
                            {/* <!-- <div className="three-giffy"><img src="img/bg002.gif"></div> --> */}
                            <div className="portfolio-left">
                                <div className="company-portfolio-left-info-box">
                                    <div className="portfolio-info-head">
                                        <div className="logo-head-wrp">
                                            <div className="portfolio-logo2 aos" data-aos="zoom-in">
                                                <img src={vs} alt="Video Status" />
                                            </div>
                                            <div className="portfolio-content-wraper aos" data-aos="fade-in">
                                                <h2>Video Status</h2>
                                                <p>Video Status</p>
                                            </div>
                                        </div>
                                        <div className="portfolio-info aos" data-aos="fade-up">
                                            <p>
                                                This project built on the Android native and backend (Admin panel and REST API) are implementedin PHP7 Laravel framework using MySQL & Nginx server. Video status list display in admin area.Latest & trending videos are downloadable in the local storage by users. User have facility to sharevideo on social media using this application. Application data and designs are fully customizableand configurable by admin.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--portfolio-left--> */}
                            <div className="mobile_wrapper">
                                <div className="mobile-frame">
                                    <img src={iphonex} alt="MOBILE APP" />
                                </div>
                                {/* <!--mobile-frame--> */}
                                <div className="mobile-video">
                                    <img src={vsimg} alt="dellemc" />
                                </div>
                            </div>
                        </div>
                        <div className="right-portfolio-wraper right-portfolio-wrap3">
                            <div className="service-block">
                                <div className="cirkle-bg"> </div>
                            </div>
                            <div className="right-poin-text-wraper">
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Category wise playlist</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Language wise playlist.  </p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>List of all trending videos</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>User can filter the video list.</p>
                                </div>
                                <div className="point-text-wraper aos" data-aos="fade-left">
                                    <p>Upload video on the server.</p>
                                </div>
                                <ul className="app-download-link-wraper aos" data-aos="fade-up">
                                    <li>
                                        <a rel="noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.cirkle.videostatus&hl=en" className="app-download-link3"><img src={robote} alt=""/></a>
                                    </li>
                                    {/* <!-- <li>
                                            <a target="_blank" href="#" className="app-download-link3"><img src="img/brand.svg"></a>
                                </li> --> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--home-portfolio--> */}
                <div className="home-portfolio" data-header-group="white_header" data-home-project="4">
                    <div className="project-clip">
                        <div className="container">
                            <div className="gify-c"><img src={code2} /></div>
                            <div className="portfolio-left">
                                <div className="right-poin-text-wraper">
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>Event Networking</p>
                                    </div>
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>Location-Based Login</p>
                                    </div>
                                    <div className="point-text-wraper aos" data-aos="fade-right">
                                        <p>Related Quiz</p>
                                    </div>
                                    <ul className="app-download-link-wraper aos" data-aos="fade-up">
                                        <li>
                                            <a target="_blank" href="#" className="app-download-link3">
                                                <img src={robote} />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="#" className="app-download-link3">
                                                <img src={apple} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--portfolio-left--> */}
                            <div className="mobile_wrapper">
                                <div className="mobile-frame">
                                    <img src={iphoneright} alt="MOBILE APP" />
                                </div>
                                {/* <!--mobile-frame--> */}
                                <div className="mobile-video">
                                    <img src={dellemc} alt="dellemc" />
                                </div>
                            </div>
                        </div>
                        <div className="right-portfolio-wraper portfolio-left right-portfolio-wrap4">
                            <div className="bg-c" data-tilt data-tilt-perspective="100">c</div>
                            <div className="company-portfolio-left-info-box">
                                <div className="portfolio-info-head">
                                    <div className="logo-head-wrp">
                                        <div className="portfolio-logo2 aos" data-aos="zoom-in">
                                            <img src={dell} alt="newscode" />
                                        </div>
                                        <div className="portfolio-content-wraper aos" data-aos="fade-in">
                                            <h2>DELL</h2>
                                            <p>Event Management</p>
                                        </div>
                                    </div>
                                    <div className="portfolio-info aos" data-aos="fade-in">
                                        <p>
                                            Single interface for attendees to learn, connect,
                                            interact, network and sharegiving a complete control over
                                            the event experience.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--home-portfolio--> */}
            </section>
        );
    }
}

export default portfolio;