import React, { Component } from 'react';
import Background from '../../../images/testimonial/testimonial.jpg'
class firstsection extends Component {
    render() {
        return (
            <section className="inner-page-title">
                <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="header__text">
                    <div className="header__text-inner text-center">
                        <h2>Testimonial</h2>
                        <div className="tagline-inner">  Check out what clients  <span className="hignlight"> around the globe </span> say about us </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;