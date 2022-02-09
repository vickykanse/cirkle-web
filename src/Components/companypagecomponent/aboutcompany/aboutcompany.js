import React, { Component } from 'react';
import "./aboutcompany.css"
import hero from '../../../images/company/hero.png';

class aboutcompany extends Component {
    render() {
        return (
            <section className="cm-about-company">
                <div className="inner_content_wrap big-container">
                    <div className="row">
                        <div className="col-8">
                            <div className="cm-about-inner-content">
                                <div className="cm-section-title text-left anim-title">
                                    <div className="aos aos-init aos-animate" data-aos="fade-right">
                                        <h2>Hello, We're Cirkle studio</h2>
                                    </div>
                                    <div className="seperator aos aos-init aos-animate" data-aos="fade-up"></div>
                                </div>
                                <div className="about-text aos aos-init aos-animate" data-aos="slide-up">
                                    <ul>
                                        <li>We are a digital agency with a team of passionate- led individuals.
                                        The journey started with a single man's dream to build a company with
                                        providing remarkable IT services and here we are!!</li>
                                        <li>Thus, in 2012, Cirkle studio was born. in 2015, we started exploring our
                                        business
                                        through various platforms.</li>
                                        <li>In the beginning, we started with small project works and by keeping those
                                        projects, we improved skills &amp; abilities.</li>
                                        <li>Being on the market since 2012, we have managed to gain the trust and respect
                                        from our clients. Long-term relationships and happy customers have always been
                                        one of our main goals.</li>
                                        <li>We work personally with clients, UNDERSTANDING their essentials and allocating
                                        them with an endeavor administrator who deals with the general PROCESS.</li>
                                        <li>We know the clients do not have an interest in trophies but have in effective
                                        solutions. Improved skills and abilities put us on the right track so far.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="cm-about-inner-banner aos-init aos-animate" data-aos="fade-left">
                                <img src={hero} alt="About Banner" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default aboutcompany;