import React, { Component } from 'react';
import './stageofdesign.css'
class stageofdesign extends Component {
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
            textShadow: `${this.state.offsetX}px ${this.state.offsetY}px 20px rgba(0, 0, 0, 0.05)`
        }
        return (
            <section data-header-group="black_header" className="cm-design-stages">
                {/* <!-- <p className="big-text-bg">Cirkle</p> --> */}
                <div id="clock-bg" className="clock-bg white" style={offset}>
                    <span className="letter-container">
                        <span className="clock-bg-letter">c</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">i</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">r</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">k</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">l</span>
                    </span>
                    <span className="letter-container">
                        <span className="clock-bg-letter">e</span>
                    </span>
                </div>
                <div className="inner_content_wrap">
                    <div className="cm-design-stages-inner-content">
                        <h2>Stages of website design & development:</h2>
                        <div className="cm-design-stages-wrapper">
                            <ul>
                                <li data-aos="fade-right">
                                    <div className="cm-stage-number">
                                        <span>01</span>
                                    </div>
                                    <div className="cm-stage-content">
                                        <h3>Analysis and definition of tasks</h3>
                                        <p>
                                            In the first phase of UI/UX development, We start with acquiring data and other
                                            necessary information about the project.
                                    </p>
                                    </div>
                                </li>
                                <li data-aos="fade-left">
                                    <div className="cm-stage-number">
                                        <span>02</span>
                                    </div>
                                    <div className="cm-stage-content">
                                        <h3>Market research</h3>
                                        <p>
                                            In the second Phase, we dig deep to understand the business, the competitors ,
                                            situation and environment which will help it grow the most.
                                    </p>
                                    </div>
                                </li>
                                <li data-aos="fade-right">
                                    <div className="cm-stage-number">
                                        <span>03</span>
                                    </div>
                                    <div className="cm-stage-content">
                                        <h3>Design of the structure</h3>
                                        <p>
                                            The third phase of development, after acquiring the data about opportunities,
                                            marketplace and essential inputs of our clients.
                                    </p>
                                    </div>
                                </li>
                                <li data-aos="fade-left">
                                    <div className="cm-stage-number">
                                        <span>04</span>
                                    </div>
                                    <div className="cm-stage-content">
                                        <h3>Drawing a unique design</h3>
                                        <p>
                                            The Ultimate phase, our expert designer develop a website in such a manner that
                                            works SEAMLESSLYand with optimum speed.
                                    </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default stageofdesign;