import React, { Component } from 'react';
import Background from '../../../images/group/5.jpg';

class firstsection extends Component {
    render() {
        return (
            <section className="inner-page-title">
                <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="header__text">
                    <div className="header__text-inner text-center">
                        <h2>Business Development Manager</h2>
                        <div className="tagline-inner"> Surat  -  India   </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;