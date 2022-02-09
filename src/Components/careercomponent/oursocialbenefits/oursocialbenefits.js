import React, { Component } from 'react';
import './oursocialbenefits.css';
import hr from '../../../images/career/payal-hr.jpg'
import bns from '../../../images/career/bns-back-image.png';
import keybord from '../../../images/career/mac-keyboard-image.png'
import mouse from '../../../images/career/mac-mouse-image.png'
class oursocialbenefits extends Component {
    render() {
        return (
            <section data-header-group="black_header" className="social-banefits">
                <div className="inner_content_wrap">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-right">
                            <h2 className="black">Our Social Benefits</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                    </div>
                    <div className="row">
                        <div className="cm-banefits-wrapper">
                            <div className="cm-banefits-list cm_list_align_right" data-aos="fade-left" data-aos-delay="1500">
                                <ul>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-press"></i>
                                        </div>
                                        <span>In-house Multilingual speaker</span>
                                    </li>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-appreciation"></i>
                                        </div>
                                        <span>Work appreciation activities</span>
                                    </li>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-framework"></i>
                                        </div>
                                        <span>Internship and training accomplishment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cm-banefits-middle-sec">
                            <div className="banafits-left-section" data-aos="flip-left" data-aos-delay="800">
                                <div className="banafits_content">
                                    <p>We let the employees perfect with these benefits. Be the next!
                                </p>
                                </div>
                                <div className="banafits-back-image-view">
                                    <img src={bns} />
                                    <div className="benefit-card">
                                        <div className="cm-benefit-image">
                                            <img src={hr} alt="HR Management" />
                                        </div>
                                        <div className="benefit-card-content">
                                            <h6>Payal Gadhesariya</h6>
                                            <span>HR-manager</span>
                                        </div>
                                        <div className="banefites-card-btn">
                                            <a href="mailto:Hr@cirklestudio.co" target="_blank"
                                                className="btn btn_submit btn_small">
                                                <div className="cm_btn_hover">
                                                    <span>Send Us CV</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="cm-mac-keyboard-img" data-aos="zoom-in-right">
                                    <img src={keybord} />
                                </div>
                                <div className="cm-mac-mouse-img" data-aos="zoom-in-left">
                                    <img src={mouse} />
                                </div>
                            </div>
                        </div>
                        <div className="cm-banefits-wrapper">
                            <div className="cm-banefits-list" data-aos="fade-right" data-aos-delay="1500">
                                <ul>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-encourage"></i>
                                        </div>
                                        <span>Encouragement of projects and conferences</span>
                                    </li>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-work"></i>
                                        </div>
                                        <span>Professional working environment </span>
                                    </li>
                                    <li>
                                        <div className="cm-icon-wrapper">
                                            <i className="flaticon-developing"></i>
                                        </div>
                                        <span>Miscellaneous activities enforcement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default oursocialbenefits;