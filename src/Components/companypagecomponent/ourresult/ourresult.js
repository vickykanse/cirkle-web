import React, { Component } from 'react';
import "./ourresult.css";
import Typing from './typing';

import map from '../../../images/company/map.svg';
import ecommerce from '../../../images/company/ecommerce-development-companies.svg';
import reliable from '../../../images/company/img_Reliable.png';
import mobileapp from '../../../images/company/Mobile_App_Developers_2019.png';

class ourresult extends Component {
    render() {
        return (
            <section className="cm-company-profile">
                <div className="map-bg"><img src={map} /></div>
                <div className="inner_content_wrap">
                    <div className="cm-section-title anim-title text-left">
                        <div className="aos" >
                            <span className="styled-span">OUR RESULTS</span>
                            <h2>Cirkle Studio stars in numbers</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                    </div>
                    <div className="cm-company-imp">

                        <Typing
                            dataText={[
                                '45+ Professionals',
                                '195+ Satisfied clients',
                                '2407+ Total projects',
                                'Since 2012'
                            ]}
                        />
                        <div className="about-company-profile">
                            <div className="slick-box">
                                <a href="#" className="company-profile-img">
                                    <img src={ecommerce} alt="GoodFirms Badge" />
                                </a>
                            </div>
                            <div className="slick-box">
                                <a href="#" className="company-profile-img">
                                    <img src={reliable} alt="GoodFirms Badge" />
                                </a>
                            </div>
                            <div className="slick-box">
                                <a href="#" className="company-profile-img">
                                    <img src={mobileapp} alt="GoodFirms Badge" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ourresult;