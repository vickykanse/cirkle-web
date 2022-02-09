import React, { Component } from 'react';
import './appbuild.css'

class appbuild extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="app-build">
                <div className="words">
                    <span>C</span>
                    <span>i</span>
                    <span>r</span>
                    <span>k</span>
                    <span>l</span>
                    <span>e</span>
                </div>
                <div className="inner_content_wrap">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-left">
                            <h2>Kind Of Apps we Build</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-up"></div>
                        <span>We build almost every application here. You name it, and we make it.
                    </span>
                    </div>
                    <div className="row app-row">
                        <div className="image-column">
                            <div className="inner-column">
                                <div className="circle-one aos" data-aos="zoomIn">
                                    <div className="circle-two">
                                        <div className="circle-three"></div>
                                    </div>
                                </div>
                                <div className="icon icon-1 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-interview"></i>
                                        {/* <!-- <img src="img/app-development/app-1.png" alt=""> --> */}
                                        <span className="badge badge-contrast shadow-box">Business Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-2 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-online-education"></i>
                                        {/* <!-- <img src="img/app-development/app-2.png" alt=""> --> */}
                                        <span className="badge badge-contrast shadow-box">Educational Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-3 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-financial-graphic-of-stocks-on-tablet-screen"></i>
                                        {/* <!-- <img src="img/app-development/app-3.png" alt=""> --> */}
                                        <span className="badge badge-contrast shadow-box">Finance Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-4 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-gym"></i>
                                        {/* <!-- <img src="img/app-development/app-4.png" alt=""> --> */}
                                        <span className="badge badge-contrast shadow-box">Health And Fitness Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-5 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-app"></i>
                                        <span className="badge badge-contrast shadow-box">Music Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-6 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-exposure"></i>
                                        <span className="badge badge-contrast shadow-box">Photo Editing And Video Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-7 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-facebook"></i>
                                        <span className="badge badge-contrast shadow-box">Social Networking Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-8 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-cosmetics"></i>
                                        <span className="badge badge-contrast shadow-box">Beauty Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-9 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-on-demand"></i>
                                        <span className="badge badge-contrast shadow-box">On-demand Apps</span>
                                    </a>
                                </div>
                                <div className="icon icon-10 aos" data-aos="zoomIn">
                                    <a href="javascript:;">
                                        <i className="flaticon-controller"></i>
                                        <span className="badge badge-contrast shadow-box">Game App (AR, VR)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default appbuild;