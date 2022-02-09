import React, { Component } from 'react';
import './portfoliosidebar.css'
import port from '../../../images/portfoliyo/pot-image.png'
import Gif from '../../../images/portfoliyo/contact_roku.gif'

class portfoliomodal extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.show && (
                <div className="portfolio-sidebar open_sidebar">
                      <div className="project-info-pop">
                    <div className="project-inner-info">
                        <div className="crop-shadow"></div>
                        <div className="cm-pot-img-wrapper desktop-imgg">
                           
                            {this.props.children}
                        </div>
                        <div className="project-descrption mCustomScrollbar">
                            <div className="cm-pot-img-wrapper mobile-imggg">
                                <div className="project-image">
                                    <img src={port} alt="Portfolio Image" />
                                </div>
                            </div>
                             <h3>{this.props.name}</h3>
                             <p>{this.props.description}</p>
                           
                            <div className="pot-sidebar-wrapper mobile-form">
                                <div className="portfolio-form">
                                    <h3 className="con-form-title">Let’s get on</h3>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="text" id="inputName" className="form-control" placeholder="Name"
                                                required="" autoFocus="" />
                                            <div className="input_line"></div>
                                            <label for="inputName">Name</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="text" id="inputPhone" className="form-control" placeholder="Phone"
                                                required="" />
                                            <div className="input_line"></div>
                                            <label for="inputPhone">Phone</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                                                required="" />
                                            <div className="input_line"></div>
                                            <label for="inputEmail">Email</label>
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
                                                    <span>Send</span>
                                                </div>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close-icon mobile-close" onClick={this.props.onHide}>
                    <span className="cm_close_left_line"></span>
                    <span className="cm_close_right_line"></span>
                </div>
                <div className="pot-sidebar-wrapper">
                    <div className="close-icon" onClick={this.props.onHide}>
                        <span className="cm_close_left_line"></span>
                        <span className="cm_close_right_line"></span>
                    </div>
                    <div className="portfolio-form">
                        <img src={Gif} className="hello-gif" />
                        <h3 className="con-form-title">Let’s get on</h3>
                        <form className="form-signin">
                            <div className="form-label-group">
                                <input type="text" id="inputName" className="form-control" placeholder="Name" required=""
                                    autoFocus="" />
                                <div className="input_line"></div>
                                <label for="inputName">Name</label>
                            </div>
                            <div className="form-label-group">
                                <input type="text" id="inputPhone" className="form-control" placeholder="Phone" required="" />
                                <div className="input_line"></div>
                                <label for="inputPhone">Phone</label>
                            </div>
                            <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required="" />
                                <div className="input_line"></div>
                                <label for="inputEmail">Email</label>
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
                                        <span>Send</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default portfoliomodal;