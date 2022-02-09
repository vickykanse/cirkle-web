import React, { Component } from 'react';
import './Expertise.css'
class Expertise extends Component {
    render() {
        return (
            <section data-header-group="black_header" className="cm-web-experise">
                <div className="col-line-wrap">
                    <div className="col-line"></div>
                    <div className="col-line"></div>
                    <div className="col-line"></div>
                    <div className="col-line"></div>
                </div>
                <div className="inner_content_wraps">
                    <div className="title-decorative">
                        <h2>Our Expertise</h2>
                    </div>
                    <div className="expertise-row">
                        <div className="expertise-col aos" data-aos="slide-up">
                            <div className="exp-col-inner">
                                <div className="exp-icon"><i className="flaticon-store"></i></div>
                                <h4>E-commerce</h4>
                                <p>Developing an E-commerce website requires the correct skills and tools, technology and
                                platforms.</p>
                                <p>We own the experience and expertise to build your dream store. With our correct
                                technology and leading developers, we can develop a store where customers will login
                                their way too delighted shopping experience.
                            </p>
                                <p>We have wide range of technology which ranges from Shopfiy, webflow, magneto,
                                Woocommernce etc.
                            </p>
                            </div>
                        </div>
                        <div className="expertise-col aos" data-aos="slide-up">
                            <div className="exp-col-inner">
                                <div className="exp-icon"><i className="flaticon-www"></i> </div>
                                <h4>Landing Page</h4>
                                <p>Your landing page can be more than just a simple page designed to take simple actions.
                            </p>
                                <p>We will develop landing page in such manner through which converting visitors into lead
                                would be ease. This will help you creating a relationship between your company and
                                potential customer.</p>
                                <p>We will be using marketing tools you will be able to see what offer the lead converted
                                on, when they converted, and what other interactions they’ve had on your site.</p>
                            </div>
                        </div>
                        <div className="expertise-col aos" data-aos="slide-up">
                            <div className="exp-col-inner">
                                <div className="exp-icon"><i className="flaticon-cms"></i></div>
                                <h4>Content Management System</h4>
                                <p>With Web content management system it will ease to manage web-based content and other
                                website content.
                            </p>
                                <p>We create seamless user experiences through marketing automation, shared data and
                                increases lead generation.
                            </p>
                                <p>This will allow you to change web pages, update graphics and create new pages etc without
                                interfering with backend of the website or system.
                                We create seamless user experiences through marketing automation, shared data and
                                increases lead generation.
                            </p>
                            </div>
                        </div>
                        <div className="expertise-col aos" data-aos="slide-up">
                            <div className="exp-col-inner">
                                <div className="exp-icon"><i className="flaticon-multitask"></i></div>
                                <h4>Enterprise Solutions</h4>
                                <p>With ERP integration you can easily account for new orders and fulfill them regardless of
                                when or where the sale is made.</p>
                                <p>where the sale is made. This helps business to provide customers or user with access to
                                their live account information.
                            </p>
                                <p>Companies which remain on top always goes for integration to ERP, account and inventory
                                software which helps them keep to maintain digital inventory and ordering functionality.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Expertise;