import React, { Component } from 'react';
import img1 from '../../../images/office/img1-office.format-jpeg.width-950.jpg'
import img2 from '../../../images/office/img2-office.format-jpeg.width-950.jpg'
import img3 from '../../../images/office/img3-office.format-jpeg.width-950.jpg'
class Environment extends Component {
    render() {
        return (
            <section className="cs-working-environment-section">
                <div className="inner_content_wrap big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos " data-aos="fade-right">
                            <span className="styled-span">MONDAY, TUESDAY, ENVIRONMENT</span>
                            <h2 className="black">An efficient team is a combination of shared responsibility, trust, support and fun</h2>
                        </div>
                        <div className="seperator aos " data-aos="fade-left"></div>
                    </div>
                </div>
                <div className="environment-contianer big-container">
                    <div className="environment-row">
                        <div className="cs-envi-col-info">
                            <div className="cs-envi-col-info-container">
                                <div className="cm-section-title anim-title text-left">
                                    <div className="aos " data-aos="fade-right">
                                        <span className="styled-span">Office</span>
                                        <h2 className="black">People spend most of their time sleeping and working. While choosing the
                                        right bed is totally up to you, we care about the working space for our team.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-envi-col-img">
                            <div className="cs-collage-list cs-collage-list--quartet-3">
                                <div className="cs-collage-list-item first">
                                    <div className="cs-collage-img">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item second">
                                    <div className="cs-collage-img">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item third">
                                    <div className="cs-collage-img">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="environment-row">
                        <div className="cs-envi-col-info">
                            <div className="cs-envi-col-info-container">
                                <div className="cm-section-title anim-title text-left">
                                    <div className="aos " data-aos="fade-right">
                                        <span className="styled-span">CONFERENCES</span>
                                        <h2 className="black">People spend most of their time sleeping and working. While choosing the
                                        right bed is totally up to you, we care about the working space for our team.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-envi-col-img">
                            <div className="cs-collage-list cs-collage-list--quartet-3">
                                <div className="cs-collage-list-item first">
                                    <div className="cs-collage-img">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item second">
                                    <div className="cs-collage-img">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item third">
                                    <div className="cs-collage-img">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="environment-row">
                        <div className="cs-envi-col-info">
                            <div className="cs-envi-col-info-container">
                                <div className="cm-section-title anim-title text-left">
                                    <div className="aos " data-aos="fade-right">
                                        <span className="styled-span">Sports</span>
                                        <h2 className="black">People spend most of their time sleeping and working. While choosing the
                                        right bed is totally up to you, we care about the working space for our team.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cs-envi-col-img">
                            <div className="cs-collage-list cs-collage-list--quartet-3">
                                <div className="cs-collage-list-item first">
                                    <div className="cs-collage-img">
                                        <img src={img1} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item second">
                                    <div className="cs-collage-img">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                                <div className="cs-collage-list-item third">
                                    <div className="cs-collage-img">
                                        <img src={img3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Environment;