import React, { Component } from 'react';
import './perks.css'
import inv from '../../../images/career/investment-copy-23x.original.png';
import office from '../../../images/career/ic-new-offiice-v-43x.original.png';
import eco from '../../../images/career/sport-copy-43x.original.png'
import game from '../../../images/career/sport3x.original.png'
import heart from '../../../images/career/ic-greate-people3x.original.png'
import partner from '../../../images/career/sport-copy-23x.original.png'
import health from '../../../images/career/sport-copy3x.original.png'
import sports from '../../../images/career/ic-chelleging-projects-copy3x.original.png'
class Perks extends Component {
    render() {
        return (
            <section className="cm-perks-section">
                <div className="inner_content_wrap big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-right">
                            <span className="styled-span">OUR PERKS</span>
                            <h2>Our efficiency is the result of a cool work environment,<br />
                                trust, support and fun</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                    </div>
                    <ul className="perks-list row">
                        <li className="perks-list-item">
                            <img alt="Investment" src={inv} />
                            <h4 className="perks-title">Individual bonuses</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="New office" src={office} />
                            <h4 className="perks-title">Cozy office in Kyiv downtown</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="Eco friendly" src={eco} />
                            <h4 className="perks-title">Environmentally friendly</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="PS Gamepad" src={game} />
                            <h4 className="perks-title">Adventures in office</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="People" src={heart} />
                            <h4 className="perks-title">Friendship &amp; trust</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="Sport" src={partner} />
                            <h4 className="perks-title">Team buildings and parties</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="Heart" src={health} />
                            <h4 className="perks-title">Health insurance</h4>
                        </li>
                        <li className="perks-list-item">
                            <img alt="Challenging" src={sports} />
                            <h4 className="perks-title">Corporate sports activities</h4>
                        </li>
                    </ul>
                </div>
            </section >
        );
    }
}

export default Perks;