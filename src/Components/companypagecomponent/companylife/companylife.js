import React, { Component } from 'react';


import './companylife.css';
import img1 from '../../../images/company/img1.original.jpg';
import img2 from '../../../images/company/img2.original.jpg';
import img3 from '../../../images/company/img3.original.jpg';
import img4 from '../../../images/company/img4.original.jpg';
import img5 from '../../../images/company/img5.original.jpg';
import Tilt from "../../3dTilt/Tilt"

class companylife extends Component {

    render() {
        // const { itemData } = this.props;

        return (
            <section className="cm-company-life">
                <div className="cm-company-life-masonry">
                    <ul className="ds-company__collage-list">
                        <li className="company-life-list cm-list-first" >
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="inner-image-wraper" >
                                    <img src={this.props.image1} />
                                </div>
                            </Tilt>
                        </li>
                        <li className="company-life-list cm-list-second" >
                            <Tilt className="Tilt" options={{ max: 25 }} >
                                <div className="inner-image-wraper" >
                                    <img src={this.props.image2} />
                                </div>
                            </Tilt>
                        </li>
                        <li className="company-life-list cm-list-third">
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="inner-image-wraper"  >
                                    <img src={this.props.image3} />
                                </div>
                            </Tilt>
                        </li>
                        <li className="company-life-list cm-list-four">
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="inner-image-wraper" >
                                    <img src={this.props.image4} />
                                </div>
                            </Tilt>
                        </li>
                        <li className="company-life-list cm-list-five" >
                            <Tilt className="Tilt" options={{ max: 25 }}  >
                                <div className="inner-image-wraper">
                                    <img src={this.props.image5} />
                                </div>
                            </Tilt>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default companylife;