import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './aboutcompany.css';
import Abtimg from '../../../images/about-image.png'

class aboutcompanyindex extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1 / 32
        }
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
            transform: `translate3d(${this.state.offsetX}px, ${this.state.offsetY}px, 0)`
        }
        return (
            <>
                <div className="inner_content_wrap">
                    <div className="row">
                        <div className="col-5">
                            <div className="cm_about_content" >
                                <h5 className="cm_section_title">Who We Are? </h5>
                                <h6>we transform the reality in a whole new way.</h6>
                                <div className="cm_ab_tag_line">
                                    <h4>
                                        <span>Responsible. <span className="cm_inner_sp">Creative.</span></span>
                                        <div className="big-background-letter" style={offset}>
                                            <span>R</span>
                                        </div>
                                    </h4>
                                </div>
                                <div className="cm_ab_description">
                                    <p>
                                        We are a highly focused solution-oriented studio, impacting on professional lives
                                    with our technology in the field of Web, Mobile and Digital marketing.</p>
                                </div>
                                <div className="cm_auto-btn">
                                    <div className="cm_hover_inner_blank">

                                        <NavLink to="/Company" >
                                            <span>Let's Go to the Page</span>
                                            <div className="hover_arrow"></div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                        </div>
                    </div>
                </div>
                <div className="about-banner-image" >
                    {/* <!-- <div className="about-inner-image"></div> --> */}
                    <img src={Abtimg} alt="About Banner" />
                </div>
            </>
        );
    }
}

export default aboutcompanyindex;