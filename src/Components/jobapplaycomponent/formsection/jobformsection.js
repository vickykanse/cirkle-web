import React, { Component } from 'react';

class jobformsection extends Component {
    render() {
        return (
            <section className="job-descrition-detail">
                <div className="inner_content_wrap big-container">
                    <div className="row">
                        <div className="col-8">
                            <div className="job-description-wrapper">
                                <h3>Are you ready to take on the challenge?</h3>
                                <p>Django Stars is looking for an experienced Business Development Manager to help us expand our sales capabilities and build long-term relationships with our customers.</p>
                                <h3>Skills required:</h3>
                                <ul>
                                    <li>3+ years of experience in international sales or international business development</li>
                                    <li>Experience in IT services B2B sales</li>
                                    <li>C1/C2 English proficiency level</li>
                                    <li>Advanced understanding of IT processes and Software Development Life Cycle</li>
                                    <li>Advanced understanding of Marketing and Business Development processes</li>
                                    <li>Experience of setting up and working with Sales automation tools would be a plus</li>
                                </ul>
                                <h3>Responsibility:</h3>
                                <ul>
                                    <li>Communication with leads (3-10 negotiations per week)</li>
                                    <li>Preparing commercial proposals</li>
                                    <li>Leading and coordinating relationships between stakeholders from Django Stars side (business analysts, project managers, developers, marketing professionals) and client’s side (roles depend on the company type) during the sale cycle</li>
                                    <li>Building long-term relationships with our clients</li>
                                    <li>Lead qualification</li>
                                    <li>Understand real customers’ needs and readiness for cooperation</li>
                                    <li>Work with existing leads database (reactivation)</li>
                                    <li>Ability to mentor junior team members and conduct interviews with candidates would be a plus</li>
                                </ul>
                                <h3>What we will expect from you :</h3>
                                <ul>
                                    <li>Empathy</li>
                                    <li>Growth mindset</li>
                                    <li>Focus on improving lead qualification, negotiation, and internal processes</li>
                                    <li>Deep understanding of our business and development processes specifics</li>
                                </ul>
                                <h3>We offer:</h3>
                                <ul>
                                    <li>Challenging projects with cutting edge technologies;</li>
                                    <li>Highest development standard;</li>
                                    <li>A talented and skilled team with cross-domain expertise;</li>
                                    <li>Flexible schedule and ability to work remotely;</li>
                                    <li>Close cooperation with the Client and business trips;</li>
                                    <li>Competitive salary in USD;</li>
                                    <li>Paid vacation and sick leaves;</li>
                                    <li>Medical insurance;</li>
                                    <li>PE accounting and support;</li>
                                    <li>Modern and cozy office in Kyiv downtown;</li>
                                    <li>Friendly atmosphere and corporate events to rest and share knowledge;</li>
                                    <li>Conferences in Ukraine and abroad;</li>
                                    <li>Corporate football and basketball;</li>
                                    <li>Office gym, ping-pong, and PS4.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="apply-job-form-wrapper">
                                <form className="form-signin">
                                    <div className="form-field-group">
                                        <div className="form-label-group">
                                            <input type="text" id="inputFirstName" className="form-control" placeholder="First Name"
                                                required="" />
                                            <div className="input_line"></div>
                                            <label for="inputName">First Name*</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="inputLastName" className="form-control" placeholder="Last Name"
                                                required="" />
                                            <div className="input_line"></div>
                                            <label for="inputName">Last Name*</label>
                                        </div>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                                            required="" />
                                        <div className="input_line"></div>
                                        <label for="inputEmail">Email*</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="inputlinkedin" className="form-control" placeholder="Your LinkedIn" required="" />
                                        <div className="input_line"></div>
                                        <label for="inputPhone">Your LinkedIn*</label>
                                    </div>
                                    <div className="form-label-group file-upload">
                                        <input type="file" id="inputattach" className="form-control" placeholder="Your CV" required="" />
                                        <div className="input_line"></div>
                                        <label for="inputPhone">Your CV*</label>
                                    </div>
                                    <div className="form-label-group">
                                        <textarea type="text" className="form-control" placeholder="Message" required=""
                                            tabIndex="4"></textarea>
                                        <div className="input_line"></div>
                                        <label>Message</label>
                                    </div>
                                    <div className="cm_form_button">
                                        <button className="btn btn_submit" type="submit">
                                            <div className="cm_btn_hover">
                                                <span>Apply Now</span>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default jobformsection;