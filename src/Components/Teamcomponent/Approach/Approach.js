import React, { Component } from 'react';
import Fullsize from '../../../images/team/FullSizeRender.png'

import ic from '../../../images/team/ic_brown_friday.png'
import ic1 from '../../../images/team/ic_chelleging_projects.png'
import ic2 from '../../../images/team/ic_conferences_v2_qlaCfU8.png'
import ic3 from '../../../images/team/ic_CUTTING_EDGE_TECHNOL.png'
import ic4 from '../../../images/team/ic_greate_people.png'
import ic5 from '../../../images/team/ic_NEW_OFFIICE_v4.png'

class Approach extends Component {
    render() {
        return (
            <section className="cm-approach-section">
                <div className="section-bg" style={{ backgroundImage: `url(${Fullsize})` }}></div>
                <div className="inner_content_wrap big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos " data-aos="fade-right">
                            <span className="styled-span">OUR APPROACH</span>
                            <h2>We’re constantly growing, but always try to keep important things first</h2>
                        </div>
                        <div className="seperator aos " data-aos="fade-left"></div>
                    </div>
                    <ul className="cm-approach-steps slick-mobile row">
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic} />
                                <h4>Passion for engineering</h4>
                            </div>
                        </li>
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic1} />
                                <h4>Challenging Projects</h4>
                            </div>
                        </li>
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic2} />
                                <h4>Friendship And Trust</h4>
                            </div>
                        </li>
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic3} />
                                <h4>Cozy Environment</h4>
                            </div>
                        </li>
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic4} />
                                <h4>Education And Growth</h4>
                            </div>
                        </li>
                        <li>
                            <div className="cm-approach-box">
                                <img src={ic5} />
                                <h4>Community Support</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Approach;