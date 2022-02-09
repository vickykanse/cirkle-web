import React, { Component } from 'react';
import "./uianduxdiff.css"
import Biglatter from '../../bigbglatter/bigbglatter'

class uianduxdiff extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="cm-difference-design">
                <div className="inner_content_wrap">
                    <div className="cm-diff-title">
                        <h2 data-aos="fade-down">
                            UI and UX: what<br /> is the difference
                    </h2>
                    </div>
                    <div className="cm-ui-ux-difference">
                        <div className="cm-difference-content">
                            <ul>
                                <li>
                                    <span data-aos="fade-left" data-aos-delay="300">
                                        U
                                    <span>X</span>
                                    </span>
                                    <p data-aos="fade-up" data-aos-delay="900">
                                        UI Design stands for User Interface Design. A user’s experience of the app is
                                        determined by how they interact with it.
                                        This is more along the lines of the graphic design. Its how a site looks and feels,
                                        in addition to how it operates. It translates a brand’s strengths and voice onto the
                                        screen or it says the message of product loud and clear before anything else.
                                        Our designers have a good sense of Creativity and technical skill, which result in
                                        great design that attracts users and ensures a pleasant product experience.
                                </p>
                                </li>
                                <li>
                                    <span data-aos="fade-left" data-aos-delay="600">
                                        <span>U</span>
                                    I
                                </span>
                                    <p data-aos="fade-up" data-aos-delay="1200">
                                        UX design refers to the term User Experience Design. The main goal is to improve the
                                        user's experience with the product through test results, ultimately creating a
                                        product that is useful and valuable, pleasing to use.
                                        This design is more technical and analytical. It involves a lot of research to
                                        analyze and optimize the customer’s experience. There is a lot of psychology and
                                        sociology in UX. Our brilliant designer creates all aspects of user interaction in
                                        such manner, that converts in great experience.
                                </p>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="1500">
                                    <p className="cm-ui-bl-ds">The ultimate goal of UI and UX is to convey important information
                                    to intended users in a beautiful, convenient, and clear way. By Using own top-notch
                                    skills, we create iconic web projects which can attract and grab the attention of a
                                    huge audience for a long time.
                                </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Biglatter biglatter="k" />
            </section>
        );
    }
}

export default uianduxdiff;