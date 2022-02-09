import React, { Component } from 'react';
import './CaseStudies.css'
import overlayimg from '../../../images/webdevlopment/sale-overlay.jpg'
import Timg from '../../../images/webdevlopment/trupawsco.png'
import Oimg from '../../../images/webdevlopment/orthofeet.png'
import Mimg from '../../../images/webdevlopment/missdiva.png'
import Bimg from '../../../images/webdevlopment/bmbshael.png'
import Pimg from '../../../images/webdevlopment/port.png'
import Ximg from '../../../images/webdevlopment/xivda.png'
import Rimg from '../../../images/webdevlopment/rug-station.png'
import Taimg from '../../../images/webdevlopment/thedateroom.png'



class CaseStudies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            T: true,
            o: false,
            m: false,
            b: false,
            p: false,
            x: false,
            r: false,
            ta: false,
        };
    }
    T_hoverOn = () => {
        this.setState({ T: true ,o: false,m: false,b: false,p: false,x: false,r: false });
    }
    O_hoverOn = () => {
       
        this.setState({ o: true, T: false,m: false,b: false,p: false,x: false,r: false});
    }
    M_hoverOn = () => {
       
        this.setState({ m: true, T: false,o: false,b: false,p: false,x: false,r: false});
    }
    B_hoverOn = () => {
       
        this.setState({ b: true, T: false,o: false,m: false,p: false,x: false,r: false});
    }
    P_hoverOn = () => {
       
        this.setState({ p: true, T: false,o: false,m: false,b: false,x: false,r: false});
    }
    X_hoverOn = () => {
       
        this.setState({ x: true, T: false,o: false,m: false,p: false,b: false,r: false});
    }
    R_hoverOn = () => {
        this.setState({ r: true,x: false, T: false,o: false,m: false,p: false,b: false});
    }
    Ta_hoverOn = () => {
        this.setState({ Ta: true,x: false, T: false,o: false,m: false,p: false,b: false,r: false});
    }
    render() {
        const {T , o, m, b, p, x, r, Ta} = this.state;
        let hoverimg;
    
        if (T) {
    
            hoverimg = <img src={Timg}/>
    
        } else if (o) {
    
            hoverimg = <img src={Oimg}/>
    
        }
        else if (m) {
    
            hoverimg = <img src={Mimg}/>
    
        }
        else if (b) {
    
            hoverimg = <img src={Bimg}/>
    
        }
        else if (p) {
    
            hoverimg = <img src={Pimg}/>
    
        }
        else if (x) {
            hoverimg = <img src={Ximg}/>
    
        }
        else if (r) {
            hoverimg = <img src={Rimg}/>
    
        }
        else if (Ta) {
            hoverimg = <img src={Taimg}/>
    
        }
        else {
            hoverimg = <img src={Timg}/>

        }
        
        return (
            <section data-header-group="black_header" className="case-studies">
                <div className="cm-section-title text-center  anim-title">
                    <div className="aos" data-aos="fade-right">
                        <h2>Case Studies</h2>
                    </div>
                    <div className="seperator aos" data-aos="fade-up"></div>
                </div>
                <div className="row">
                    <div className="col-7 multyBox">
                        <div className="expBox boxOne aos" data-aos="fade-right">
                            <span className="box borderB"onMouseEnter={this.T_hoverOn } >
                                <i className="letr">T</i>
                                <p className="text">Tru Paws co </p>
                            </span>
                            <span className="box white" onMouseEnter={this.O_hoverOn }>
                                <i className="letr">O</i>
                                <p className="text">OrthoFeet </p>
                            </span>
                            <span className="box blueL"  onMouseEnter={this.M_hoverOn }>
                                <i className="letr">M</i>
                                <p className="text">Miss Diva – <br />Women’s Shoes</p>
                            </span>
                        </div>
                        <div className="expBox boxTwo aos" data-aos="fade-up">
                            <span className="box blueD"  onMouseEnter={this.B_hoverOn }>
                                <i className="letr">B</i>
                                <p className="text">Bomb<br />Shell</p>
                            </span>
                            <span className="box borderB" onMouseEnter={this.P_hoverOn }>
                                <i className="letr">P</i>
                                <p className="text">Porte-à-Vie </p>
                            </span>
                            <span className="box yellow" onMouseEnter={this.X_hoverOn }>
                                <i className="letr">X</i>
                                <p className="text">Xvida</p>
                            </span>
                        </div>
                        <div className="expBox boxThree aos" data-aos="fade-left">
                            <span className="box white"  onMouseEnter={this.R_hoverOn }>
                                <i className="letr">R</i>
                                <p className="text">Rug <br />Station</p>
                            </span>
                            <span className="box blueL" onMouseEnter={this.Ta_hoverOn }>
                                <i className="letr">T</i>
                                <p className="text">The Date <br /> Room</p>
                            </span>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="case-study-img aos" data-aos="fade-left">
                            {hoverimg}
                        </div>
                    </div>
                </div>
                <div className="container-ratio">
                    <svg id="a885c306-f3b2-4c4f-aa9a-9c501dc82acc" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                        xmlns xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1182.57 800.41">
                        <defs>
                            <linearGradient id="ad14ea2d-9cbf-4915-ab56-7f64e851a61a" x1="39.35" y1="388.57" x2="1121.93"
                                y2="388.57" gradientTransform="matrix(1, 0, 0, -1, 0, 777.89)"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#5cdb95"></stop>
                                <stop offset="1" stopColor="#56db99"></stop>
                            </linearGradient>
                            <linearGradient id="PSgrad_1" x1="0%" x2="61.566%" y1="0%" y2="78.801%">
                                <stop offset="0%" stopColor="#5cdb95" stop-opacity="1"></stop>
                                <stop offset="100%" stopColor="#5cdb95" stop-opacity="1"></stop>
                            </linearGradient>
                        </defs>
                        <path id="video-sparow-gradient" className="move-up" d="M977,711.88c-4.85-.74-9.42-1.77-14-2.89-89.41-17.15-156.82-75.43-218.64-85-71.79-11.1-124.1,23.77-124.1,23.77h0A260.46,260.46,0,0,1,512.91,708c.47,0,32.54,23.49,32.54,23.49-20-7.64-21.54-11.09-54.54-17.81-8.3,1.31-24.43,3.08-32.73,3.55h.37c12.4,8.76,60.14,33.47,60.14,33.47-22.28-8.58-104.8-31.33-134.91-39.63-87.55-20.79-162.61-89.69-178.93-208.76-4.85-35-8.11-88.48-31.61-137.24C151.8,320.56,123,264.8,58.65,266.48a136,136,0,0,0-19.3,2s7.37-66.38,65.83-100.6c24.71-14.55,53.52-22.38,82-23.31,39.16-1.31,77.48,10.63,103.4,36.46,35.71,35.61,61.54,81.77,83.73,115.24C435.9,238.88,521.86,177,639.44,111.8,687.92,85,741.9,57.16,802.23,28.63c4-1.86,8.58.47,7.55,4.2-5.87,21.91-22.84,82.89-49.51,159.34,53.43-12.77,112.17-24.8,177.06-35.89,4.38-.75,7.93,2.89,5.88,6.24-11.47,18.65-40.1,62.66-80,117.76,40.74-1.12,95.47-1.77,141-1.21,4.48.09,7.28,4.1,4.48,6.9C977.52,318,860.6,434.5,725.31,534.45c38.13,4.85,86.34,8.76,141.72,10.44-.28,0-.56.1-.84.1,127.92-12.41,248.11,24.24,255.57,102C1126.14,694.26,1044.09,722.7,977,711.88Z"
                            fill-rule="evenodd" fill="url(#ad14ea2d-9cbf-4915-ab56-7f64e851a61a)"></path>
                        <path d="M625.64,642.42c-.28.28-.56.47-.84.75l-1.12,1.11C624.33,643.72,625,643.07,625.64,642.42Z"
                            fill="#565656" fill-rule="evenodd"></path>
                        <clipPath id="video-image-clip">
                            <path className="move-down" d="M978.64,658.92c-4.67-.74-9.23-1.68-13.71-2.7-87.55-15.85-153.66-69.74-214.26-78.51-70.4-10.25-121.58,22-121.58,22h0c-30.59,26.94-67,45.5-105.18,55.66.47,0,31.89,21.72,31.89,21.72-19.58-7-21.07-10.25-53.42-16.41-8.12,1.22-24,2.8-32.08,3.36h.37c12.13,8.11,58.93,31,58.93,31-21.82-7.93-102.65-29-132.12-36.65-85.78-19.2-159.34-82.89-175.38-192.91-4.75-32.35-7.92-81.77-30.95-126.8-21-41.12-49.23-92.59-112.26-91a128,128,0,0,0-18.93,2s7.27-61.35,64.52-93.06C148.72,143.13,177,135.86,204.76,135c38.32-1.12,75.9,9.79,101.26,33.66,35,32.91,60.32,75.52,82.05,106.57C448.39,222.19,532.68,165,647.83,104.71c47.55-24.8,100.42-50.44,159.43-76.82,3.92-1.78,8.4.46,7.46,3.82-5.78,20.23-22.37,76.64-48.48,147.22,52.31-11.75,109.93-22.93,173.42-33.19,4.29-.65,7.74,2.61,5.78,5.78-11.18,17.25-39.34,57.9-78.41,108.81,39.91-1,93.52-1.68,138.09-1.12,4.38.09,7.08,3.82,4.38,6.43C978.92,295.2,864.42,402.89,731.93,495.2c37.39,4.47,84.57,8.11,138.83,9.6-.28,0-.47.09-.75.09,125.32-11.37,243.08,22.47,250.35,94.27C1124.74,642.61,1044.46,668.9,978.64,658.92Z"
                                fill-rule="evenodd"></path>
                        </clipPath>
                        <path d="M634.49,594.77a5.47,5.47,0,0,0-.74.66c-.37.37-.75.65-1.12,1C633.19,595.89,633.84,595.33,634.49,594.77Z"
                            fill-rule="evenodd"></path>
                        <a clip-path="url(#video-image-clip)" data-fancybox="">
                            <image clip-path="url(#video-image-clip)" width="100%" height="100%" xlink href={overlayimg} preserveAspectRatio="none"></image>
                        </a>
                    </svg>
                </div>
            </section>
        );
    }
}

export default CaseStudies;