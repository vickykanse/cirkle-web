import React, { Component } from 'react';
import mainbg from '../../../images/appdevelopment/background2.png'
import './firstsection.css'

class firstsection extends Component {
    render() {
        return (
            <section className="cm_main_header_section black-bg-section">
                <img alt="" className="img-fluid set-abs background-animate" src={mainbg} />
                <div className="cm-header-text">
                    <div className="cm-header-text-wrapper">
                        <h3>Turn your business into apps.</h3>
                        <span>Creating great applications is not easy, but you should use it. Due to the
                        rapid increase in expectations and consumption, users expect every mobile experience to be
                        amazing, regardless of the size of their organization or industry.</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;