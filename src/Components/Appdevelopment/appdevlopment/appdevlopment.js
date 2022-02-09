import React, { Component } from 'react';
import './appdav.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import android from "../../../images/appdevelopment/android_why_ph.png";
import java from "../../../images/appdevelopment/java.svg"
import Kotlin from "../../../images/appdevelopment/kotlin.svg"
import Flutter from "../../../images/appdevelopment/flutter.svg"
import html from "../../../images/appdevelopment/html_banner_logo.png"
import xcode from "../../../images/appdevelopment/x-code.svg"
import Androidstudio from "../../../images/appdevelopment/android-studio.svg"
import Database from "../../../images/appdevelopment/phone-gap-header-banner.png"
import Firebase from "../../../images/appdevelopment/firebase.svg"
import sqlite from "../../../images/appdevelopment/sqlite.svg"
import Realmio from "../../../images/appdevelopment/realmio.svg"
import Coredata from "../../../images/appdevelopment/CoreData.svg"
import Framework from "../../../images/appdevelopment/html_feature_screen.png";
import Reactimg from "../../../images/appdevelopment/React-jS.svg"
import Ionic from "../../../images/appdevelopment/ionic.svg"
import Coredova from "../../../images/appdevelopment/cordova.svg"
import sdk from "../../../images/appdevelopment/iOS-SDK.svg"
import reactivex from "../../../images/appdevelopment/reactivex-logo.svg"
import junit from "../../../images/appdevelopment/jUnit.svg"
import Iosbanner from "../../../images/appdevelopment/iPhone-App-Development.png"
import Swift from "../../../images/appdevelopment/swift.svg"
import Objectc from "../../../images/appdevelopment/object-c.svg"


class appdevlopment extends Component {
    render() {
        var settings = {
            nav: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        };
        return (
            <section data-header-group="black_header" className="app-dev-new-app-stack">
                <div className="inner_content_wrap">

                    <div className="cm-section-title">
                        <h2>App Development</h2>
                    </div>
                    <div className="app-stack-slick">
                        <Slider {...settings}>
                            <div className="item">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="flexslider">
                                            <div className="slider-inner-app">
                                                <img src={android} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 stack-detail">
                                        <h2>Android Technologies</h2>
                                        <p>This general-purpose language can be applied for numerous tasks including Android app
                                    development.</p>
                                        <div className="technology-block">
                                            <a href="javascript:;">
                                                <img src={java} alt="Java" />
                                                <span className="badge badge-contrast shadow-box">Java</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Kotlin} alt="Kotlin" />
                                                <span className="badge badge-contrast shadow-box">Kotlin</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Flutter} alt="Flutter" />
                                                <span className="badge badge-contrast shadow-box">Flutter</span>
                                            </a>
                                        </div>
                                        <div className="hire-me-btn">
                                            <span className="start-frm">3 Java developers
                                        are available for hiring </span>
                                            <a href="javascript:;" className="theme-btn"> Hire Developers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="flexslider">
                                            <div className="slider-inner-app ios-tech">
                                                <img src={Iosbanner} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 stack-detail">
                                        <h2>iOS Technologies</h2>
                                        <p>This general-purpose language can be applied for numerous tasks including Android app
                                    development.</p>
                                        <div className="technology-block">
                                            <a href="javascript:;">
                                                <img src={Swift} alt="Swift" />
                                                <span className="badge badge-contrast shadow-box">Swift</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Objectc} alt="Objective" />
                                                <span className="badge badge-contrast shadow-box">Objective</span>
                                            </a>
                                        </div>
                                        <div className="hire-me-btn">
                                            <span className="start-frm">3 Java developers
                                        are available for hiring </span>
                                            <a href="javascript:;" className="theme-btn"> Hire Developers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="flexslider">
                                            <div className="slider-inner-app">
                                                <img src={Framework} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 stack-detail">
                                        <h2>Framework We Used</h2>
                                        <p>This general-purpose language can be applied for numerous tasks including Android app
                                    development.</p>
                                        <div className="technology-block">
                                            <a href="javascript:;">
                                                <img src={Reactimg} alt="React jS" />
                                                <span className="badge badge-contrast shadow-box">React jS</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Ionic} alt="ionic" />
                                                <span className="badge badge-contrast shadow-box">Kotlin</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Coredova} alt="cordova" />
                                                <span className="badge badge-contrast shadow-box">cordova</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={sdk} alt="iOS SDK" />
                                                <span className="badge badge-contrast shadow-box">iOS SDK</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={reactivex} alt="reactivex" />
                                                <span className="badge badge-contrast shadow-box">reactivex</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={junit} alt="jUnit" />
                                                <span className="badge badge-contrast shadow-box">jUnit</span>
                                            </a>
                                        </div>
                                        <div className="hire-me-btn">
                                            <span className="start-frm">3 Java developers
                                        are available for hiring </span>
                                            <a href="javascript:;" className="theme-btn"> Hire Developers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="flexslider">
                                            <div className="slider-inner-app">
                                                <img src={Database} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 stack-detail">
                                        <h2>Database</h2>
                                        <p>This general-purpose language can be applied for numerous tasks including Android app
                                    development.</p>
                                        <div className="technology-block">
                                            <a href="javascript:;">
                                                <img src={Firebase} alt="firebase" />
                                                <span className="badge badge-contrast shadow-box">firebase</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={sqlite} alt="sqlite" />
                                                <span className="badge badge-contrast shadow-box">sqlite</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Realmio} alt="realmio" />
                                                <span className="badge badge-contrast shadow-box">realmio</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Coredata} alt="CoreData" />
                                                <span className="badge badge-contrast shadow-box">CoreData</span>
                                            </a>
                                        </div>
                                        <div className="hire-me-btn">
                                            <span className="start-frm">3 Java developers
                                        are available for hiring </span>
                                            <a href="javascript:;" className="theme-btn"> Hire Developers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="flexslider">
                                            <div className="slider-inner-app tool-stack">
                                                <img src={html} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 stack-detail">
                                        <h2>Tools</h2>
                                        <p>This general-purpose language can be applied for numerous tasks including Android app
                                    development.</p>
                                        <div className="technology-block">
                                            <a href="javascript:;">
                                                <img src={xcode} alt="x-code" />
                                                <span className="badge badge-contrast shadow-box">x-code</span>
                                            </a>
                                            <a href="javascript:;">
                                                <img src={Androidstudio} alt="android-studio" />
                                                <span className="badge badge-contrast shadow-box">android-studio</span>
                                            </a>
                                        </div>
                                        <div className="hire-me-btn">
                                            <span className="start-frm">3 Java developers
                                        are available for hiring </span>
                                            <a href="javascript:;" className="theme-btn"> Hire Developers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default appdevlopment;