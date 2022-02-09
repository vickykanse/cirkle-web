import React, { Component } from 'react';
import orignal from "../../../images/qatesting/original.gif"
class firstsection extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="qa-banner-section cm_main_header_section">
                <img src={orignal} className="qa-center" />
                <div className="cm-header-text">
                    <div className="cm-header-text-wrapper">
                        <h3 data-aos="fade-down">We provide remarkable QA testing for web and mobile applications</h3>
                        <span data-aos="fade-up">
                            Our testing experts make sure that each of your application performs their best according to
                        their specifications.</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;