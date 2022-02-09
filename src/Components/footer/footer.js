import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './footer.css';

class footer extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1 / 32
        }
        this._mouseMove = this._mouseMove.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousemove', this._mouseMove);
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this._mouseMove);
    }
    _mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);

        let x = 0,
            y = 0;
        x += ((-followX - x) * this.state.friction);
        y += (followY - y) * this.state.friction;
        this.setState({
            offsetX: x,
            offsetY: y
        });
    }
    render() {
        let offset = {
            transform: `translate3d(${this.state.offsetX}px, ${this.state.offsetY}px, 0)`
        }
        return (
            <>
                <div className="footer-title">
                    <h3>Let's Discuss Your <br /> Future Project</h3>
                    <span>and how to make it the best-in-className</span>
                </div>
               
                    <div className="footer-big-text">
                        <div className="big-background-letter" style={offset}>
                            <span>c</span>
                        </div>
                    </div>

                    <div className="inner_content_wrap">
                        <div className="footer-left-part">
                            <div className="company-links">
                                <h4>About Us:</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/Company" className="btn signIn-btn">
                                            Company
                                            </NavLink>
                                    </li>
                                    <li>

                                        <NavLink to="/Testimonial" >
                                            Testimonial
                                            </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Career" >Career</NavLink>
                                        <span className="vacacy" href="#vacancy"
                                            onClick="window.location.href='career.html#vacancy';">6</span>
                                    </li>
                                    <li><NavLink to="/Team" >Team</NavLink></li>
                                </ul>
                            </div>
                            <div className="cm-contact-details">
                                <div className="city-location">
                                    <h3>
                                        India
                                <span>Surat</span>
                                    </h3>
                                </div>
                                <div className="con-parts">
                                    <span>Telephone</span>
                                    <a href="tel:+919016545336" target="_blank">+91 90165 45336</a>
                                </div>
                                <div className="con-parts">
                                    <span>E-mail</span>
                                    <a href="mailto:info@cirklestudio.co" target="_blank">info@cirklestudio.co</a>
                                    <br />
                                    <a href="mailto:sales@cirklestudio.co" target="_blank">sales@cirklestudio.co</a>
                                </div>
                                <div className="con-parts">
                                    <span>Address</span>
                                    <a href="https://goo.gl/maps/qydtCBhiicPvzbeq6" target="_blank">B - 506, RJD Business Hub,
                                Katargam, Surat 395004, INDIA</a>
                                </div>
                            </div>
                            <div className="footer-bottom-socials">
                                <ul>
                                    <li>
                                        <a href="https://in.linkedin.com/company/cirklestudio" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                                fill="#fff">
                                                <path
                                                    d="M4.655,6.412 L0.64,6.412 C0.462002675,6.41255108 0.317999147,6.55700182 0.318,6.735 L0.318,19.633 C0.318,19.812 0.462,19.956 0.64,19.956 L4.655,19.956 C4.83338797,19.956 4.978,19.811388 4.978,19.633 L4.978,6.735 C4.978,6.64933507 4.94396974,6.56717876 4.88339549,6.50660451 C4.82282124,6.44603026 4.74066493,6.412 4.655,6.412 L4.655,6.412 Z M2.65,0 C1.18784422,0.000549884535 0.00220609182,1.18484578 0,2.647 C0.00220609182,4.10915422 1.18784422,5.29345012 2.65,5.294 C4.11043206,5.29179723 5.29379723,4.10843206 5.296,2.648 C5.29434577,1.18639763 4.10960289,0.00210216071 2.648,0.001 L2.65,0 Z M14.868,6.092 C13.255,6.092 12.063,6.785 11.34,7.572 L11.34,6.735 C11.3400009,6.55700182 11.1959973,6.41255108 11.018,6.412 L7.173,6.412 C7.08733507,6.412 7.00517876,6.44603026 6.94460451,6.50660451 C6.88403026,6.56717876 6.85,6.64933507 6.85,6.735 L6.85,19.633 C6.85,19.812 6.994,19.956 7.173,19.956 L11.179,19.956 C11.3569973,19.9554489 11.5010009,19.8109982 11.501,19.633 L11.501,13.252 C11.501,11.101 12.086,10.263 13.585,10.263 C15.217,10.263 15.347,11.606 15.347,13.363 L15.347,19.633 C15.347,19.812 15.491,19.956 15.67,19.956 L19.677,19.956 C19.855388,19.956 20,19.811388 20,19.633 L20,12.558 C20,9.361 19.39,6.092 14.868,6.092 L14.868,6.092 Z"
                                                    transform="translate(3 3)" /> </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/cirklestudio/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                                fill="#fff">
                                                <path
                                                    d="M6.632,6.546 L6.632,4.825 C6.632,4.567 6.645,4.366 6.671,4.225 C6.696,4.083 6.755,3.945 6.846,3.807 C6.936,3.669 7.084,3.574 7.287,3.522 C7.491,3.469 7.761,3.442 8.099,3.442 L9.941,3.442 L9.941,0 L6.995,0 C5.291,0 4.067,0.378 3.323,1.133 C2.579,1.889 2.207,3.003 2.207,4.473 L2.207,6.546 L0,6.546 L0,9.99 L2.206,9.99 L2.206,19.98 L6.632,19.98 L6.632,9.99 L9.578,9.99 L9.967,6.546 L6.632,6.546 Z"
                                                    transform="translate(8 3)" /> </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="skype:.cid.124b1d379c3009eb" target="_blank">
                                            <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                                <path
                                                    d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send?phone=919016545336&amp;text=hello"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0" />
                                                <path
                                                    d="m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.uplabs.com/cirklestudio" target="_blank">
                                            <svg viewBox="0 0 120 71">
                                                <linearGradient id="a">
                                                    <stop offset="0" stopColor="#6a11cb" />
                                                    <stop offset="1" stopColor="#2575fc" />
                                                </linearGradient>
                                                <linearGradient id="b" x1="-16.826117%" x2="219.3%" xlink href="#a"
                                                    y1="68.255184%" y2="-19.959866%" />
                                                <linearGradient id="c" x1="-104.295098%" x2="112.418627%" xlink href="#a"
                                                    y1="86.9491%" y2="21.510283%" />
                                                <g fill="none" transform="">
                                                    <path
                                                        d="m36.3090909 2.5875v26.0475c0 4.3125-.8636364 7.4175-2.5909091 9.315s-4.4909091 2.9325-8.2909091 2.9325-6.5636363-.8625-8.2909091-2.76c-1.7272727-1.8975-2.5909091-5.0025-2.5909091-9.4875v-26.0475h-14.33636359v26.0475c0 7.7625 1.55454545 13.455 4.66363636 17.595.51818182.5175.86363637 1.2075 1.38181818 1.725 4.14545455 4.14 10.53636365 6.21 19.17272725 6.21 8.4636364 0 14.8545455-2.07 19-6.21.5181818-.5175.8636364-1.035 1.3818182-1.725 3.1090909-4.14 4.6636364-10.005 4.6636364-17.595v-26.0475z"
                                                        fill="url(#b)" />
                                                    <path
                                                        d="m59.4545455 67.7925v-65.3775h13.8181818v8.1075c1.9-3.2775 4.1454545-5.6925 6.9090909-7.4175 2.7636363-1.5525 5.8727273-2.415 9.5-2.415 7.0818182 0 12.6090908 2.415 16.5818178 7.0725 3.972728 4.6575 6.045455 11.2125 6.045455 19.4925 0 8.1075-2.072727 14.49-6.045455 19.32-3.972727 4.83-9.3272724 7.245-15.8909087 7.245-3.9727273 0-7.2545455-.69-10.0181818-2.2425-2.7636364-1.38-5.1818182-3.795-7.0818182-6.9.1727272 1.2075.3454545 2.5875.3454545 4.14 0 1.38.1727273 3.105.1727273 5.0025v13.8h-14.3363636zm13.1272727-40.5375c0 4.485 1.0363636 7.935 3.2818182 10.5225 2.2454545 2.415 5.3545454 3.795 9.1545454 3.795 3.9727273 0 7.0818182-1.2075 9.1545455-3.795 2.2454545-2.415 3.2818182-6.0375 3.2818182-10.5225s-1.0363637-7.935-3.2818182-10.5225c-2.2454546-2.5875-5.3545455-3.795-9.3272728-3.795-3.8 0-6.9090909 1.38-9.1545454 3.9675-2.0727273 2.2425-3.1090909 5.865-3.1090909 10.35z"
                                                        fill="url(#c)" />
                                                    <g fill="#3a3a3a">
                                                        <path
                                                            d="m46 68c-.5189873-.5217391-.8649789-1.2173913-1.3839662-1.7391304-4.1518988-4.1739131-10.5527427-6.2608696-19.2025317-6.2608696-8.4767932 0-14.8776371 2.0869565-19.02953586 6.2608696-.51898734.5217391-.8649789 1.0434782-1.38396624 1.7391304z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://dribbble.com/cirklestudio" target="_blank">
                                            <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                                <path
                                                    d="m16.354 23.17c.02-.006.039-.014.059-.021 12.215-4.853 8.836-23.149-4.413-23.149-6.649 0-12 5.42-12 12 0 8.327 8.434 14.269 16.354 11.17zm-11.073-3.111c.852-1.432 3.609-5.472 8.315-6.866.984 2.509 1.674 5.436 1.742 8.755-3.566 1.199-7.327.392-10.057-1.889zm11.532 1.263c-.131-3.189-.782-6.017-1.71-8.467 2.082-.325 4.492-.108 7.225.987-.581 3.261-2.666 6.002-5.515 7.48zm5.672-9.031c-3.01-1.131-5.663-1.272-7.959-.834-.355-.8-.728-1.569-1.123-2.277 3.523-1.407 5.605-3.122 6.537-4.03 1.645 1.904 2.622 4.369 2.545 7.141zm-3.61-8.209c-.848.807-2.845 2.437-6.26 3.77-1.674-2.648-3.464-4.516-4.598-5.562 3.628-1.494 7.812-.856 10.858 1.792zm-12.292-1.059c.856.753 2.735 2.561 4.548 5.357-2.49.802-5.612 1.391-9.409 1.474.604-2.894 2.408-5.346 4.861-6.831zm-5.051 8.337c4.25-.069 7.69-.74 10.409-1.648.376.659.733 1.377 1.076 2.123-4.735 1.508-7.694 5.401-8.827 7.159-1.828-2.04-2.836-4.702-2.658-7.634z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://clutch.co/profile/cirkle-studio" target="_blank" title="Clutch">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                                fill="#fff">
                                                <path
                                                    d="M14.665,15.536 L14.664,15.536 L15.414,14.857 L18.786,18.225 L17.984,18.985 C15.982237,20.833278 13.3483372,21.8442517 10.624,21.81 C4.576,21.81 0,17.166 0,10.972 C0,4.78 4.469,0.272 10.624,0.272 C13.322012,0.236423999 15.9329172,1.22645924 17.929,3.042 L18.759,3.83 L15.441,7.198 L14.692,6.546 C13.56,5.562 12.114,5.032 10.624,5.052 C7.118,5.052 4.684,7.496 4.684,11 C4.684,14.504 7.199,17.056 10.624,17.056 C12.1141423,17.0751036 13.556848,16.5324377 14.665,15.536 Z M10.463,14.639 C8.49741858,14.639 6.904,13.0218525 6.904,11.027 C6.904,9.03214748 8.49741858,7.415 10.463,7.415 C12.4285814,7.415 14.022,9.03214748 14.022,11.027 C14.022,13.0218525 12.4285814,14.639 10.463,14.639 Z"
                                                    transform="translate(4 2)" /> </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.goodfirms.co/company/cirkle-studio-pvt-ltd" title="Goodfirms"
                                            target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                                fill="#121212">
                                                <path
                                                    d="M11.222 10.033s-1.11-.11-1.11.88v4.395h7.333v1.319s.022.659-.667.659h-6.667V23h8s4.844-.748 4.889-5.714v-7.253H11.222zM22.777 3H8.333C3.11 4.23 3 8.516 3 8.516V23h5.556V9.813c0-1.12 1.11-1.318 1.11-1.318h13.112V3z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.upwork.com:/ag/cirklestudio/" target="_blank" title="Upwork">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="upwork-hover" width="50" height="36"
                                                viewBox="0 0 50 36" fill="none">
                                                <path
                                                    d="M27.0791 12.9699L27.6728 13.8961L27.9801 12.8398C29.5311 7.50836 33.3659 4.2001 38.4001 4.2001C44.2239 4.2001 49 8.97624 49 14.8001C49 20.9327 44.2152 25.7001 38.4001 25.7001C35.497 25.7001 33.0898 24.9282 30.9685 23.5783L30.3539 23.1872L30.2099 23.9012L27.8908 35.4001H23.2188L26.5889 19.7051L26.6353 19.4892L26.5069 19.3095C25.0245 17.2341 23.6376 14.8571 22.5473 12.6765L21.6 12.9001V15.4001C21.6 21.2269 16.9209 25.9001 11.2 25.9001C5.47916 25.9001 0.800049 21.2269 0.800049 15.4001V1.2001H5.20005V15.3001C5.20005 18.4762 7.82391 21.1001 11 21.1001C14.1762 21.1001 16.8 18.4762 16.8 15.3001V1.1001H21.5264C22.6604 4.86497 24.6338 9.1552 27.0791 12.9699ZM31.6177 17.9685L31.5331 18.2785L31.78 18.4842C33.6474 20.0404 36.0568 21.1001 38.4001 21.1001C41.568 21.1001 44.491 18.3878 44.5998 15.0162L44.6 15.0082V15.0001C44.6 11.624 41.8762 8.9001 38.5 8.9001C36.2533 8.9001 34.7609 10.01 33.7996 11.4182C32.8528 12.805 32.4119 14.4874 32.2069 15.7179L32.2001 15.7587V15.8001V15.8331L31.6177 17.9685Z"
                                                    stroke="#6FDA44"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <p>© 2012 – 2020 CirkleStudio. All rights reserved.</p>
                            </div>
                        </div>
                    </div>

               
                <aside className="curtains pg3_bg_right_full"></aside>
                <aside className="curtains pg3_bg_right_light"></aside>
            </>
        );
    }
}

export default footer;