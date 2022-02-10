import React, { Component } from 'react';
import './whatwedo.css'
import Biglatter from '../../bigbglatter/bigbglatter'
class whatwedo extends Component {

    render() {

        return (
            <section className="cm-what-we-do-design">
                <div className="inner_content_wrap">
                    <div className="cm-section-title text-center anim-title ">
                        <div className="aos" data-aos="fade-right">
                            <h2 class="what-we-do">What We Do</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                        <span>Here’s what we do to make your product stunning:</span>
                    </div>
                    <div className="cm-how-do-design">

                        <Biglatter biglatter="c" />

                        <div className="cm-design-left-section">
                        </div>
                        <div className="cm-design-right-section">
                            <div className="cm-ds-inner-wrapper">
                                <ul>
                                    <li data-aos="fade-left" data-aos-delay="300">
                                        <div className=" wwd-icon">
                                            <i className="flaticon-coding "></i>
                                        </div>
                                        <div className="cm-design-content">
                                            <h4>User Interface</h4>
                                            <p>
                                                It is important to be well-known in the market. Your product should reflect
                                                your brand identity, and convey your message to your customer. The fabulous
                                                product needs to have exceptional UI, which make it set apart from others.
                                                Our leading designer's develop great looking user interface, which makes the
                                                product look visible and beautiful.
                                        </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="400">
                                        <div className=" wwd-icon">
                                            <i className="flaticon-brain"></i>
                                        </div>
                                        <div className="cm-design-content">
                                            <h4>Visual Identity</h4>
                                            <p>
                                                Your product should have its own identity, which showcases its glory through
                                                its marvellous Logo, attracting icons, breathtaking fonts and colour scheme.
                                                We know how to make it unique and stand apart.
                                        </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-left" data-aos-delay="500">
                                        <div className=" wwd-icon">
                                            <i className="flaticon-animation "></i>
                                        </div>
                                        <div className="cm-design-content">
                                            <h4>Motion design</h4>
                                            <p>
                                                It catches the user's eyesight and makes it glitter with its initial look.
                                                Many First impressions are achieved through motion. Our ace designers make
                                                sure that the product has a spectacular Visualize experience.
                                        </p>
                                        </div>
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

export default whatwedo;