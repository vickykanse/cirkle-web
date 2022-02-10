import React, { Component } from 'react';

class startchatpopup extends Component {
    render() {
        return (
            <div className={'cm_start_project_popup ' + this.props.openpopup}>
            <div className="cm_inner_popup mCustomScrollbar">
                <div className="close-icon" onClick={this.props.hidepopup}>
                    <span className="cm_close_left_line"></span>
                    <span className="cm_close_right_line"></span>
                </div>
                <div className="cm_project_details">
                    <div className="cm_popup_title_main">
                        <h3>CALL US</h3>
                        <div className="cm_contact_number">
                            <a href="tel:+ 91 98765 43210">+ 91 98765 43210</a>
                            <a href="tel:+ 91 98765 43210">+ 91 98765 43210</a>
                        </div>
                        <h3>Or leave a request</h3>
                    </div>
                    <div className="cm_project_details_inner">
                        <div className="row">
                            <div className="col-7">
                                <div className="call_us__formWrap">
                                    <div className="contact_us__siteDev">
                                        <h6>Web & App Development</h6>
                                        <div className="cm_check_boxs">
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                E-commerce
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                UI & UX Design
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Landing Page
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Corporate website
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                News portal
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Comprehensive solutions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="contact_us__siteDev">
                                        <h6>Hire Developers</h6>
                                        <div className="cm_check_boxs">
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Android Developer
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                UI/UX Developer
                                             </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Front End Developer
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Backend Developer
                                            </label>
                                            <label className="label--checkbox">
                                                <input className="checkbox" type="checkbox" value="E-commerce"
                                                    name="checkbox" />
                                                Shopify Developer
                                            </label>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-5">
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputName" className="form-control" placeholder="Name"
                                            required="" autofocus=""/>
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
                                            tabindex="4"></textarea>
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
        </div>
        );
    }
}

export default startchatpopup;