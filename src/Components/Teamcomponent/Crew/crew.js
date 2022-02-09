import React, { Component } from 'react';
import Roma from '../../../images/team/Roma_G_final.jpg'
class crew extends Component {
    render() {
        return (
            <section className="our-crew-tagline-section">
                <div className="inner_content_wrap">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-right">
                            <span className="styled-span">OUR CREW</span>
                            <h2 className="black">Meet the people who are eager to develop great products for you</h2>
                        </div>
                    </div>
                    <div className="row crew-member-row">
                        <div className="col-4">
                            <div className="crew-member-card">
                                <div className="crew-img" style={{ backgroundImage: `url(${Roma})` }}></div>
                                <h4>Parthik Goti<span className="position">CEO</span></h4>
                                <div className="short-feedback">
                                    <p>Your technical partner for software development and digital transformation.</p>
                                </div>
                                <a className="read_more" href="https://www.linkedin.com/in/parthik-goti-b676066a/" target="_blank">Read more on Linkedin <i className="icon-bt-next"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default crew;