import React, { Component } from 'react';
import hero from "../../../images/webdevlopment/hero_bg.svg"

class firstsection extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="cm_main_header_section black-bg-section">
                <div className="web-dev-banner-anim">
                    <img src={hero} />
                </div>
                <div className="cm-header-text">
                    <div className="cm-header-text-wrapper">
                        <h3 data-aos="fade-down">We will take your Trade to the next level with over innovative web
                        development.
                    </h3>
                        <span>In this technology-driven era, Website plays a spectacular role in accelerating your growth.
                        We make sure it does, through our web engineering experience.
                    </span>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;