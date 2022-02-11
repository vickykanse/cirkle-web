import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hiringprocess.css';
import Background from '../../../images/career/hr_process_img_bg.jpg'
import pro1 from '../../../images/career/pro1.png';
import pro2 from '../../../images/career/pro2.png';
import pro3 from '../../../images/career/pro3.png';
import pro4 from '../../../images/career/pro4.png';

class Hiringprocess extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false //This is where I am having problems
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
      }
      componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
      }
    
    render() {
        const isDesktop = this.state.isDesktop;
        var settings = {
                     nav: false,
                     dots:true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    className: "cm-hr-process-steps slick-mobile row",
                    fade: true,
                    centerMode: true,
           
        };
        return (
            <div className="cm-hr-process-section">
                <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
                <div className="process-section-container big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-right">
                            <span className="styled-span">OUR HIRING PROCESS</span>
                            <h2>It’s never been easier... for skilled professionals</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                    </div>
                    
                       {isDesktop ? (
                            <ul className="cm-hr-process-steps slick-mobile row">
                                 <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro1}  alt=""/>
                                            <h4>SEND CV</h4>
                                            <p>Send us your application with a detailed CV and a short cover letter outlining your
                                            background.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro2} alt=""/>
                                            <h4>FIRST CONTACT</h4>
                                            <p>Our HR specialist will contact you and invite you to a first meeting. We’ll introduce you
                                            to the role you’re applying for and determine whether our work culture is a good fit for
                                            you.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro3} alt=""/>
                                            <h4>EXPERT INTERVIEW</h4>
                                            <p>You’ll meet one of our team members. During this talk, you’ll discuss the test task and
                                            other relevant fields of expertise in detail.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro4} alt=""/>
                                            <h4>TEST TASK</h4>
                                            <p>We’ll ask you to do a specific test task y to verify your skills and approach to the
                                            working process.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro1} alt=""/>
                                            <h4>WELCOME ON BOARD!</h4>
                                            <p>Once we’re sure we’re a match for each other, we’ll make you an offer.</p>
                                        </div>
                                    </li>
                                </ul>
                        ) : (
                            <Slider {...settings}>
                                        <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro1} alt=""/>
                                            <h4>SEND CV</h4>
                                            <p>Send us your application with a detailed CV and a short cover letter outlining your
                                            background.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro2} alt=""/>
                                            <h4>FIRST CONTACT</h4>
                                            <p>Our HR specialist will contact you and invite you to a first meeting. We’ll introduce you
                                            to the role you’re applying for and determine whether our work culture is a good fit for
                                            you.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro3} alt=""/>
                                            <h4>EXPERT INTERVIEW</h4>
                                            <p>You’ll meet one of our team members. During this talk, you’ll discuss the test task and
                                            other relevant fields of expertise in detail.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro4} alt=""/>
                                            <h4>TEST TASK</h4>
                                            <p>We’ll ask you to do a specific test task y to verify your skills and approach to the
                                            working process.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm-hr-pro-box">
                                            <img src={pro1} alt=""/>
                                            <h4>WELCOME ON BOARD!</h4>
                                            <p>Once we’re sure we’re a match for each other, we’ll make you an offer.</p>
                                        </div>
                                    </li>
                        </Slider>
                        )}
                   
                        
                </div>
            </div>
        );
    }
}

export default Hiringprocess;