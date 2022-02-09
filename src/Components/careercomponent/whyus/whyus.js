import React, { Component } from 'react';
import './whyus.css';
import Tabs from '../../Tabs/Tabs/tabs';
import Tabsname from '../../Tabs/tab/tab';
import Tabcontent from '../../Tabs/panel/pannel';


import Challange from '../../../images/career/img1-office.width-1200.jpg'
import grow from '../../../images/career/img1-conferences.width-1200.jpg'
class whyus extends Component {
    render() {
        return (
            <section className="cm-why-us-section">
                <div className="inner_content_wrap big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos aos-init aos-animate" data-aos="fade-right">
                            <span className="styled-span">WHY US</span>
                            <h2 className="black">We make a difference to our clients
                            and our team</h2>
                        </div>
                        <div className="seperator aos aos-init aos-animate" data-aos="fade-left"></div>
                    </div>
                    <div className="why-choose-us-tabs">
                         <Tabs>
                                 <Tabsname><span>Take the challenge </span></Tabsname>
                                 <Tabcontent>
                                        <div className="services-list__info">
                                            <div className="rich-text">
                                                <p>Nobody loves boring projects. We only accept challenging ones and have expertise in
                                                several domains, so the specialist at any level can apply his knowledge and learn.
                                        </p>
                                                <ul>
                                                    <li>Challenging and innovative projects</li>
                                                    <li>Emerging technologies</li>
                                                    <li>Tools &amp; tech that you choose</li>
                                                    <li>Top engineering and design team to work with and learn from</li>
                                                    <li>Highest development standard (own code style, TDD, CI and code review)</li>
                                                    <li>Building products of different types and in different domains</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-list__img" style={{ backgroundImage: `url(${Challange})` }}></div>
                                 </Tabcontent>
                                 <Tabsname><span>Grow together </span></Tabsname>
                                 <Tabcontent>
                                        <div className="services-list__info">
                                            <div className="rich-text">
                                                <p>We are not born masters, we are learners. And we never stop boosting our skills.</p>
                                                <ul>
                                                    <li>World-class conferences (DjangoCon Europe, Pycon Ukraine, WebSummit)</li>
                                                    <li>Internal lectures and workshops</li>
                                                    <li>Brown Fridays</li>
                                                    <li>Mentoring</li>
                                                    <li>Language courses</li>
                                                    <li>Time for self-development</li>
                                                    <li>Business trips</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-list__img" style={{ backgroundImage: `url(${grow})` }}></div>
                                 </Tabcontent>
                                 <Tabsname><span>Stay cool</span></Tabsname>
                                 <Tabcontent>
                                        <div className="services-list__info">
                                            <div className="rich-text">
                                                <p>Nobody loves boring projects. We only accept challenging ones and have expertise in
                                                several domains, so the specialist at any level can apply his knowledge and learn.
                                        </p>
                                                <ul>
                                                    <li>Challenging and innovative projects</li>
                                                    <li>Emerging technologies</li>
                                                    <li>Tools &amp; tech that you choose</li>
                                                    <li>Top engineering and design team to work with and learn from</li>
                                                    <li>Highest development standard (own code style, TDD, CI and code review)</li>
                                                    <li>Building products of different types and in different domains</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-list__img" style={{ backgroundImage: `url(${Challange})` }}></div>
                                 </Tabcontent>
                                 <Tabsname><span>Rock in the office</span></Tabsname>
                                 <Tabcontent>
                                            <div className="services-list__info">
                                                <div className="rich-text">
                                                    <p>We are not born masters, we are learners. And we never stop boosting our skills.</p>
                                                    <ul>
                                                        <li>World-class conferences (DjangoCon Europe, Pycon Ukraine, WebSummit)</li>
                                                        <li>Internal lectures and workshops</li>
                                                        <li>Brown Fridays</li>
                                                        <li>Mentoring</li>
                                                        <li>Language courses</li>
                                                        <li>Time for self-development</li>
                                                        <li>Business trips</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="services-list__img" style={{ backgroundImage: `url(${grow})` }}></div>
                                 </Tabcontent>
                         </Tabs>
                        
                    </div>

                </div>
            </section>
        );
    }
}

export default whyus;