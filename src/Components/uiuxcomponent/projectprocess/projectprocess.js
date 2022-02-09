import React, { Component } from 'react';
import './projectprocess.css'
import p0 from '../../../images/uiux/pro-process.svg'
import p1 from '../../../images/uiux/pp1.svg'
import p2 from '../../../images/uiux/pp2.svg'
import p3 from '../../../images/uiux/pp3.svg'
import p4 from '../../../images/uiux/pp4.svg'

class projectprocess extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="cmp_development_process">
                <div className="vtext">Studio</div>
                <div className="inner_content_wrap">
                    <div className="cmp_content">
                        <div className="cmp_left">
                            <div className="cm-section-title">
                                <h2>Our Project Process</h2>
                                <span>Lorem Ipsum is simply dummy text</span>
                            </div>
                            <div className="main_cmp_process d-flex align-items-center h-100">
                                <h4 data-aos="fade-right">
                                    <span>
                                        <img src={p0} />
                                    </span>
                                    <b> Projects process</b>
                                </h4>
                            </div>
                        </div>
                        <div className="cmp_right">
                            <div className="process_cmp_box">
                                <ul className="ul_cmp_list">
                                    <li className="w_one tooltipLink aos" data-aos="fade-left">
                                        <span className="span_icon_process">
                                            <img src={p1} />
                                        </span>
                                        <span className="text_cmp">Designing the Product</span>
                                    </li>
                                    <li className="w_two tooltipLink aos" data-aos="fade-left">
                                        <span className="span_icon_process">
                                            <img src={p2} />
                                        </span>
                                        <span className="text_cmp">Developing the Web</span>
                                    </li>
                                    <li className="w_three tooltipLink aos" data-aos="fade-left">
                                        <span className="span_icon_process">
                                            <img src={p3} />
                                        </span>
                                        <span className="text_cmp">Maintaining the Web</span>
                                    </li>
                                    <li className="w_four tooltipLink aos" data-aos="fade-left">
                                        <span className="span_icon_process">
                                            <img src={p4} />
                                        </span>
                                        <span className="text_cmp">Code &amp; Test</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default projectprocess;