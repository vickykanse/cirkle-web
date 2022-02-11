import React, { Component } from 'react';
import animation from '../../../images/uiux/c-animated.gif'
import "./firstsection.css"

class firstsection extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="cm_main_header_section ui-ux-section">
                <div className="center-img"><img src={animation} alt=""/></div>
                <div className="cm-header-text">
                    <div className="cm-header-text-wrapper">
                        <h3 data-aos="fade-down">UI / UX Design Services </h3>
                        <span data-aos="fade-up">Our design team uses the latest UI and UX functionality to deliver
                        world-class products that meet your business goals and users' needs.</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;