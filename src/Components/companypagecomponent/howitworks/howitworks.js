import React, { Component } from 'react';
import "./howitworks.css";
class howitworks extends Component {
    render() {
        return (
            <section className="cm-process text-center ">
                <div className="inner_content_wrap big-container">
                    <div className="cm-section-title anim-title text-center">
                        <div className="aos" data-aos="fade-right">
                            <h2>How It Work</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-left"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="work-process aos" data-aos="fade-right">
                                <div className="step-num-box">
                                    <div className="step-icon"><span><i className="flaticon-transparency"></i></span>
                                    </div>
                                    <div className="step-num">01</div>
                                </div>
                                <div className="step-desc">
                                    <h4><a href="#">transparency</a></h4>
                                    <p>Transparency is not just buzzword for us that includes in our list of core values
                                    for customers to applaud. Transparency is a tangible thing that has been always
                                    implemented in circle studio and we live by it. The trust we build with our
                                    customers is invaluable. By laying out the truth about your products and
                                    services, including their limitations, we prove that we aren’t trying to hide
                                    any flaws or defects.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 md-mt-5">
                            <div className="work-process aos" data-aos="fade-up">
                                <div className="step-num-box">
                                    <div className="step-icon"><span><i className="flaticon-respect"></i></span>
                                    </div>
                                    <div className="step-num">02</div>
                                </div>
                                <div className="step-desc">
                                    <h4><a href="#"> Collaboration</a></h4>
                                    <p>For more than 8 years, we have partnered with some of the worlds most exciting
                                    companies and served them exceptional IT Solutions. Working with clients to
                                    establish what and why in solving a particular problem is always been our
                                    priority and soo far we have successfully achieved it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 md-mt-5">
                            <div className="work-process aos" data-aos="fade-left">
                                <div className="step-num-box">
                                    <div className="step-icon"><span><i className="flaticon-friendship"></i></span>
                                    </div>
                                    <div className="step-num">03</div>
                                </div>
                                <div className="step-desc">
                                    <h4><a href="#">Trustworthy</a></h4>
                                    <p>A solid reputation is bestowed upon us and comes through an accumulation of other
                                    customer's personal experience of our work. A great number of different grateful
                                    clients are the best proof of our previous statements.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default howitworks;