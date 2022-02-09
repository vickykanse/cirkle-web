import React, { Component } from 'react';
import './advantage.css';

class advantage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1 / 32

        };
        this._mouseMove = this._mouseMove.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousemove', this._mouseMove);
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this._mouseMove);
    }
    _mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);

        let x = 0,
            y = 0;
        x += ((-followX - x) * this.state.friction);
        y += (followY - y) * this.state.friction;
        this.setState({
            offsetX: x,
            offsetY: y
        });
    }
    render() {
        let offset = {
            textShadow: `${this.state.offsetX}px ${this.state.offsetY}px 10px rgb(0, 0, 0)`
        }
        return (
            <section data-header-group="white_header" className="our-advantages">
                <div id="clock-bg-white" className="clock-bg-white white" style={offset}>
                    <span className="letter-container">
                        <span className="clock-bg-letter">s</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">t</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">u</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">d</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">i</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">o</span>
                    </span>
                </div>
                <svg version="1.1" id="c-heart" xmlns="http://www.w3.org/2000/svg"
                    xmlns xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65.4 64.3"
                    style={{ enableBackground: 'new 0 0 65.4 64.3' }} xml space="preserve">

                    <path id="C" className="st0" fill="#414141" d="M53.8,9.7C47.7,2.7,40.6,0,32.3,0C13.5,0,0,12.8,0,32.4c0,19.1,13.5,31.9,32.3,31.9
                c9,0,17.3-3.3,22.8-10.9l-9-6.4c-4.1,5.2-8.8,7.4-13.7,7.4c-12.6,0-21-9.7-21-22.7c0-12.2,8.4-21.9,21-21.9c4.2,0,8.4,1.3,12.9,6.1
                L53.8,9.7z" />

                </svg>
                <div className="inner_content_wrap">
                    <div className="cm-advantages-wrapper">
                        <div className="cm-adv-description">
                            <h2 className="adv-container-title">Get an excellent web<br /> site delivered</h2>
                            <p className="adv-sub-content">We deliver a flawlessly functional app that gets positive feedback
                            from your team, your users, and of course, your wife. See our guarantees for your web app
                            below:
                            <svg version="1.1" id="arrow1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="375.01px"
                                    height="375.01px" viewBox="0 0 375.01 375.01"
                                    style={{ enableBackground: 'new 0 0 375.01 375.01' }} xml space="preserve">
                                    <g>
                                        <g>
                                            <path d="M330.254,210.966c-56.916,1.224-110.16,25.704-167.076,28.764c-16.524,0.612-33.048-1.224-45.9-8.568
                                            c23.256-4.283,45.288-12.239,61.812-27.54c17.749-15.911,19.584-45.287,8.568-66.095c-10.404-19.584-36.72-20.196-55.08-15.3
                                            C89.125,132.63,59.75,184.65,84.229,221.369c-26.928,1.836-53.856,0-80.172,1.225c-5.508,0.611-5.508,8.567,0.612,8.567
                                            c26.928,1.836,59.364,4.284,91.188,2.448c1.836,1.225,3.672,3.061,5.508,4.284c64.872,45.288,159.732-11.628,229.5-13.464
                                            C338.821,223.817,338.821,210.354,330.254,210.966z M89.737,196.277c-6.732-25.091,15.3-46.511,35.496-56.916
                                            c20.196-10.404,48.96-10.404,55.692,15.912c7.956,30.6-18.36,48.959-43.452,56.916c-11.628,3.672-22.644,6.12-34.272,7.344
                                            C96.47,213.413,92.186,206.069,89.737,196.277z" />
                                            <path
                                                d="M371.869,211.577c-8.567-5.508-16.523-11.016-24.479-16.523c-6.732-4.896-13.464-10.404-21.42-12.24
                                            c-6.12-1.836-12.24,7.344-6.732,11.627c6.732,4.896,14.076,9.18,20.809,13.464c4.896,3.061,9.792,6.732,14.075,9.792
                                            c-4.896,2.448-9.792,4.284-14.688,6.732c-3.672,1.836-7.956,3.672-11.628,5.508c-1.224,0.612-2.448,1.836-3.061,3.06
                                            c-1.836,2.448-0.611,1.225,0,0.612c-2.447,1.836-2.447,7.956,1.837,7.344l0,0c1.224,0.612,2.447,0.612,4.283,0.612
                                            c4.284-1.224,9.181-3.06,13.464-4.896c9.181-3.673,18.36-7.345,26.929-12.24C376.153,220.758,376.153,214.025,371.869,211.577z" />
                                        </g>
                                    </g>
                                </svg>
                            </p>
                        </div>
                        <div className="cm-adv-info__item">
                            <div className="info__block-wrapper">
                                <div className="info__block">
                                    <h3 className="info__subtitle">
                                        Our advantages
                                </h3>
                                    <ul className="info__list">
                                        <li className="info__list-item"> Compatible with multiple browsers </li>
                                        <li className="info__list-item"> Perfectly performs on the majority of devices </li>
                                        <li className="info__list-item"> Highly responsive </li>
                                        <li className="info__list-item"> SEO-friendly </li>
                                        <li className="info__list-item"> Supports multiple languages </li>
                                        <li className="info__list-item"> Scales no matter how much traffic </li>
                                        <li className="info__list-item"> Protected against security threats </li>
                                        <li className="info__list-item"> Easy to support and modify </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default advantage;