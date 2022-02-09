import React, { Component } from 'react';
import Background from '../../../images/company/company-banner.jpg'
import './firstsection.css'
var sectionStyle = {

    backgroundImage: "url(" + { Background } + ")"
};
class firstsection extends Component {



    render() {

        return (
            <section className="inner-page-title">
                <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="header__text">
                    <div className="header__text-inner text-center">
                        <h2>Company </h2>
                        <div className="tagline-inner">We assist <span className="hignlight"> worldwide businesses</span> to develop
                        and incorporate innovation. </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default firstsection;