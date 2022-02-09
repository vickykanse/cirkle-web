import React, { Component } from 'react';
import './exwork.css'
import Tc from '../../../images/uiux/tc.png'
import Its from '../../../images/uiux/itswatchh.png'
import ma from '../../../images/uiux/marmelicious.jpg'
import rns from '../../../images/uiux/rns-vpn.jpg'
import Biglatter from '../../bigbglatter/bigbglatter'
class exwork extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="cm-our-works-section">
                <div className="work-big-text">
                    <Biglatter biglatter="Work" />
                </div>
                <div className="inner_content_wrap">
                    <div className="our-works-wrapper">
                        <div className="our-works-title">
                            <h4>
                                Examples
                            <span>of our works</span>
                            </h4>
                        </div>
                        <div className="cm-works-ps">
                            <div className="work-lable">
                                <a href="javascript:;" className="work-btn">
                                    <img src={Tc} alt="Work Image" />
                                    <span>Tru Paws Co <span className="made-in">( Shopify )</span></span>
                                </a>
                            </div>
                            <div className="work-lable">
                                <a href="javascript:;" className="work-btn">
                                    <img src={Its} alt="Work Image" />
                                    <span>​Itswatchtime <span className="made-in">( Magento 2 )</span></span>
                                </a>
                            </div>
                            <div className="work-lable">
                                <a href="javascript:;" className="work-btn">
                                    <img src={ma} alt="Work Image" />
                                    <span>Marmelicious <span className="made-in">( Shopware 5 )</span></span>
                                </a>
                            </div>
                            <div className="work-lable">
                                <a href="javascript:;" className="work-btn">
                                    <img src={rns} alt="Work Image" />
                                    <span>RNS Free Residential VPN <span className="made-in"> ( Android App )</span></span>
                                </a>
                            </div>
                        </div>
                        <div className="cm-work-btn">
                            <a href="our-portfolio.html">
                                <span>View all works</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default exwork;