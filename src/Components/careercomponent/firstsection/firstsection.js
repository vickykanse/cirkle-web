import React, { Component } from 'react';
import './firstsection.css';

class firstsection extends Component {
    render() {
        return (
            <section className="inner-page-title ">
                <div className="header__text">
                    <div className="header__text-inner text-center">
                        <h2>Career </h2>
                        <div className="tagline-inner">We’re the team <span className="hignlight">building products</span> that rock
                        the market</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default firstsection;