import React, { Component } from 'react';
import './ourvalue.css';
import v1 from '../../../images/company/ov_img_12x.jpg';
import v2 from '../../../images/company/ov_img_22x.jpg';
import v3 from '../../../images/company/ov_img_32x.jpg';
import v4 from '../../../images/company/ov_img_42x.jpg';
import v5 from '../../../images/company/ov_img_52x.jpg';
import v6 from '../../../images/company/ov_img_62x.jpg';


class ourvalue extends Component {
    render() {
        return (
            <section className="cm-stand-for-section">
                <div className="inner_content_wrap big-container">
                    <div className="row">
                        <div className="col-3">
                            <div className="cm-section-title anim-title">
                                <div className="aos" data-aos="fade-right">
                                    <span className="styled-span">OUR VALUES</span>
                                    <h2>What we <br />stand for</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <ul className="row cm-core-value">
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v1} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v2} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v3} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v4} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v5} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cm-core-value-list">
                                    <div className="cm-core-value-card">
                                        <div className="cm-core-value-img">
                                            <img src={v6} />
                                        </div>
                                        <div className="cm-core-value-content">
                                            <div className="title-text">
                                                <h4>Bring the sense of partnership</h4>
                                            </div>
                                            <div className="description">
                                                <p>We treat our clients as partners and stay with them from the first ideas
                                                and as long as they need us.
                                            </p>
                                            </div>
                                        </div>
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

export default ourvalue;