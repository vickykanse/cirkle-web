import React, { Component } from 'react';
import './Trusted.css';
import Slider from "react-slick";

import orthfeet from '../../../images/webdevlopment/Ortho-feet-2.png'
import tg from '../../../images/webdevlopment/TG.png'
import black from '../../../images/webdevlopment/Black-2.png'
import missdiva from '../../../images/webdevlopment/Missdiva-2.png'
import bos from '../../../images/webdevlopment/Bos-2.png'
import xvidia from '../../../images/webdevlopment/XVIDA-1.png'
import Topia from '../../../images/webdevlopment/Topia-2.png'
import Rug from '../../../images/webdevlopment/Rug-sta..-2.png'
import bomb from '../../../images/webdevlopment/Bombshell-2.png'
import tenzo from '../../../images/webdevlopment/logo-tenzo.png'
import model from '../../../images/webdevlopment/modalsmoothskin.png'
import porte from '../../../images/webdevlopment/homepage_logo.png'
import trup from '../../../images/webdevlopment/trupaws.svg'
import vision from '../../../images/webdevlopment/Ezyvision.png'
import rock from '../../../images/webdevlopment/rock-the-job.png'
import room from '../../../images/webdevlopment/the-date-room.png'


// clients images
import matt from '../../../images/webdevlopment/client/matt-rimmer.png'
import thay from '../../../images/webdevlopment/client/thay-lam.png'
import stanly from '../../../images/webdevlopment/client/stanley-mburu.png'
import steve from '../../../images/webdevlopment/client/steve-lu.png'
import jessica from '../../../images/webdevlopment/client/jessica-marotta.png'
import ron from '../../../images/webdevlopment/client/ron-bar.png'
import lisa from '../../../images/webdevlopment/client/lisa-hili.png'
import Evan from '../../../images/webdevlopment/client/evan-strausand.png'
import marley from '../../../images/webdevlopment/client/matthue-marley.png'
import danial from '../../../images/webdevlopment/client/danial-dixon.png'
class Trusted extends Component {
    render() {
        var settings = {
            nav: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <section data-header-group="black_header" className="cm-trusted-by">
                <div className="inner_content_wrap">
                    <div className="cm-trusted-inner-wrapper">
                        <div className="cm-td-logo-section">
                            <h4>Trusted by</h4>
                            <div className="cm-td-logo-wrapper">
                                <div className="cm-client-site-img">
                                    <a href="https://www.orthofeet.com/" target="_blank">
                                        <img src={orthfeet} alt="Orth Feet" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://tastegreece.co.nz/" target="_blank">
                                        <img src={tg} alt="Fempower-beauty" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://fortressofinca.com/" target="_blank">
                                        <img src={black} alt="fortressofinca" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://missdiva.co.uk/" target="_blank">
                                        <img src={missdiva} alt="miss diva" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://betterorganicskincare.com/" target="_blank">
                                        <img src={bos} alt="bos" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://www.xvida.com/" target="_blank">
                                        <img src={xvidia} alt="Xvida" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="http://www.tapiabrothers.com/" target="_blank">
                                        <img src={Topia} alt="tapiabrothers" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://rugstation.com.au/" target="_blank">
                                        <img src={Rug} alt="RUG Station" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://www.bombshellsportswear.com/" target="_blank">
                                        <img src={bomb} alt="Bomb shell" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://tenzotea.co/" target="_blank">
                                        <img src={tenzo} alt="Tenzo tea" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://modelsmoothskin.com/" target="_blank">
                                        <img src={model} alt="modalsmoothskin" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://porteavie.com/" target="_blank">
                                        <img src={porte} alt="porteavie" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://www.trupawsco.com/" target="_blank">
                                        <img src={trup} alt="trupaws" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://ezyvision.co.nz/" target="_blank">
                                        <img src={vision} alt="trupaws" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://rockthatjob.com/" target="_blank">
                                        <img src={rock} alt="trupaws" />
                                    </a>
                                </div>
                                <div className="cm-client-site-img">
                                    <a href="https://www.thedateroom.com/" target="_blank">
                                        <img src={room} alt="trupaws" />
                                    </a>
                                </div>
                            </div>
                            <div className="cm-client-reviews">
                                <Slider {...settings}>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={jessica} alt="Jessica Marotta" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “This company is very advanced in website development and has helped
                                                me enormously with the creation of my website. It was my first time
                                                creating a website and this team and Chirag especially has made it very
                                                easy and fun! Very professional, reliable and honest company that strives to
                                                provide the client with the best experience and exceed their needs and
                                                wants! I would definitely recommend this company to anyone and I will be
                                                for sure using them again in the future!”
                                    </p>
                                            <h5>Jessica Marotta</h5>
                                            <span>Owner of Model Smooth Skin</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={lisa} alt="Lisa Hili" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                We've been using his services on and off for the last couple of years, and
                                                can say they have been an absolute pleasure to work. They have proven to
                                                respond very well to briefs, works efficiently and delivers on time, offering
                                                great solutions to problems. Cirkle Studio is very reliable and there is
                                                definitely a sense of trust established through their work.
                                    </p>
                                            <h5>Lisa Hili</h5>
                                            <span>Founder & CEO at Porte-à-Vie</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={matt} alt="Matt Rimmer" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                The team did a great job both in execution and responsiveness. I would
                                                recommend them highly to any business
                                    </p>
                                            <h5>Matt Rimmer</h5>
                                            <span>Director at Macelleria</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={thay} alt="Thy lam" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                Cirkle Studio did an excellent job of executing our vision onto the site. The
                                                entire team are cooperative and strive to complete the work on time. They
                                                developed our site and far exceeded our expectations by enhancing it and
                                                implementing exactly what we needed with every task.”
                                    </p>
                                            <h5>Thy lam</h5>
                                            <span>Marketing Director of Trupawsco</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={stanly} alt="Stanley Mburu" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                Its always a pleasure to work with Cirkle Studio! Great services and will
                                                continue working with them, true professionals and great quality work! Highly
                                                recommend!”
                                    </p>
                                            <h5>Stanley Mburu</h5>
                                            <span>Manager at LA New Product</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={steve} alt="Steve Lu" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “Cirkle Studio Pvt. Ltd. provided excellent development knowledge to
                                                deliver a functional platform and they hit all deadlines. Their team is flexible
                                                and reliable.”
                                    </p>
                                            <h5>Steve Lu</h5>
                                            <span>Designer/Art Director at Day4Nite</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={danial} alt="Daniel Dixon" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “Cirkle Studio Pvt. Ltd. worked effectively and saved the client significant
                                                amounts of time. Prompt and proactive, their team communicated well and provided
                                        high-quality code.” </p>
                                            <h5>Daniel Dixon</h5>
                                            <span> Co-Founder at Ellym</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={marley} alt="Matthew Marley" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “The solution was launched by the deadline, and stakeholders were pleased
                                                with the vendors’ services. Cirkle Studio Pvt. Ltd.’s communication style was a
                                        highlight. </p>
                                            <h5>Matthew Marley</h5>
                                            <span>Digital Marketing Manager at Creditfix</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={Evan} alt="Evan Streusand" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “Sales increased by 72% after the website launched. Cirkle Studio Pvt. Ltd.
                                                sets themselves apart through their solid communication, prompt
                                        turnarounds, and high-quality deliveries.”</p>
                                            <h5>Evan Streusand</h5>
                                            <span>Founder of Fortress of Inca</span>
                                        </div>
                                    </div>
                                    <div className="cm-review-item">
                                        <div className="client-profile">
                                            <img src={ron} alt="Ron Bar" />
                                        </div>
                                        <div className="review-description">
                                            <p>
                                                “I have been using Cirkle Studio Pvt. Ltd. services for the last 3 years for
                                                managing all our website development and changes on Shopify. My overall all
                                        experience using their services is excellent</p>
                                            <h5>Ron Bar</h5>
                                            <span>Founder of Orthofeet</span>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="cm-cli-form-wrapper">
                            <form className="form-signin">
                                <div className="form-field-group">
                                    <div className="form-label-group">
                                        <input type="text" id="inputFirstName" className="form-control" placeholder="First Name"
                                            required="" />
                                        <div className="input_line"></div>
                                        <label for="inputName">First Name</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="inputLastName" className="form-control" placeholder="Last Name"
                                            required="" />
                                        <div className="input_line"></div>
                                        <label for="inputName">Last Name</label>
                                    </div>
                                </div>
                                <div className="form-label-group">
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                                        required="" />
                                    <div className="input_line"></div>
                                    <label for="inputEmail">Email</label>
                                </div>
                                <div className="form-label-group">
                                    <input type="text" id="inputPhone" className="form-control" placeholder="Phone" required="" />
                                    <div className="input_line"></div>
                                    <label for="inputPhone">Phone</label>
                                </div>
                                <div className="form-label-group">
                                    <select>
                                        <option>Select</option>
                                        <option>Mobile Application Development</option>
                                        <option>Web Development</option>
                                        <option>Customized Open Source Product</option>
                                        <option>Consulting - Cloud and DevOps</option>
                                        <option>UI / UX Design</option>
                                        <option>IOT / AI / ML or Wearable</option>
                                        <option>Mobile Games Development</option>
                                        <option>QA Service</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="input_line"></div>
                                    <label for="inputPhone">Select a Service</label>
                                </div>
                                <div className="form-field-group">
                                    <div className="form-label-group">
                                        <select>
                                            <option>Select</option>
                                            <option>$5K</option>
                                            <option> $10K+ </option>
                                            <option> $25k+ </option>
                                            <option> $50k+ </option>
                                            <option> $100k+ </option>
                                            <option> Not sure </option>
                                        </select>
                                        <div className="input_line"></div>
                                        <label for="inputPhone">Budget</label>
                                    </div>
                                    <div className="form-label-group">
                                        <select>
                                            <option>Select</option>
                                            <option> Right now </option>
                                            <option> In few Weeks </option>
                                            <option> In few Months </option>
                                            <option> Not sure </option>
                                        </select>
                                        <div className="input_line"></div>
                                        <label for="inputPhone">How soon you want to start?</label>
                                    </div>
                                </div>
                                <div className="form-label-group">
                                    <select className="nicee">
                                        <option>Select</option>
                                        <option> Hire Dedicated Team </option>
                                        <option> New Project </option>
                                        <option> Existing Project </option>
                                        <option> Support - Maintenance </option>
                                    </select>
                                    <div className="input_line"></div>
                                    <label for="inputPhone">Requirement</label>
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
            </section>
        );
    }
}

export default Trusted;