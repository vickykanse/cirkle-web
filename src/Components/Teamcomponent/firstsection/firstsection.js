import React, { Component } from 'react';
import group from '../../../images/group/8.jpg'

class firstsection extends Component {
    render() {
        return (
            <section className="inner-page-title">
                <div className="section-bg" style={{ backgroundImage: `url(${group})` }}></div>
                <div className="header__text">
                    <div className="header__text-inner text-center">
                        <h2>Our Team </h2>
                        <div className="tagline-inner"> We’re the <span className="hignlight"> team building products</span> that rock the market </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;