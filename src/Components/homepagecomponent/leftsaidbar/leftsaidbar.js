import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import "./cmsaide.css";
class leftsaidbar extends Component {
    render() {
        return (
            <div className="cm_side_logo cm_left_side_bar">
                <div className="cm_inner_logo">
                    <NavLink to="/" className="see-more">Cirkle <p>Studio</p></NavLink>
                </div>
                <div className="cm-social-media">
                    <div className="social-icon">
                        <div className="icon-inner">
                            <a href="https://in.linkedin.com/company/cirklestudio" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" id="regular" enableBackground="new 0 0 24 24"
                                    height="512" viewBox="0 0 24 24" width="512">
                                    <path fill="#000"
                                        d="m18.59 24c.103 0 4.762-.001 4.66-.001.414 0 .75-.336.75-.75-.35-7.857 1.842-16.148-6.338-16.148-1.573 0-2.826.537-3.729 1.247 0-1.461-1.579-.653-5.224-.87-.414 0-.75.336-.75.75.302 14.166-.674 15.771.75 15.771h4.66c1.353 0 .492-1.908.75-8.188 0-2.594.75-3.102 2.046-3.102 1.434 0 1.675.996 1.675 3.228.257 6.167-.598 8.063.75 8.063zm-2.425-12.791c-4.491 0-3.546 4.938-3.546 11.29h-3.16v-13.521h2.974v1.298c0 .72 1.097 1.074 1.479.35.492-.934 1.77-2.025 3.75-2.025 3.527 0 4.838 1.733 4.838 6.396v7.503h-3.16c0-7.144.756-11.291-3.175-11.291z">
                                    </path>
                                    <path fill="#000"
                                        d="m1.122 7.479c-1.42 0-.448 1.585-.75 15.771 0 .414.336.75.75.75h4.665c1.42 0 .448-1.585.75-15.771 0-1.295-1.881-.531-5.415-.75zm3.915 15.021h-3.165v-13.521h3.165z">
                                    </path>
                                    <path fill="#000"
                                        d="m3.452 0c-4.576 0-4.548 6.929 0 6.929 4.545 0 4.581-6.929 0-6.929zm0 5.429c-2.568 0-2.592-3.929 0-3.929 2.597 0 2.564 3.929 0 3.929z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="social-icon">
                        <div className="icon-inner">
                            <a href="https://www.facebook.com/cirklestudio/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-110 1 511 511.99996">
                                    <path fill="#000"
                                        d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="social-icon">
                        <div className="icon-inner">
                            <a href="skype:.cid.124b1d379c3009eb" target="_blank">
                                <svg id="regular" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m12.009 16.245c-3.268 0-1.645-3.269-4.646-3.269-4.034 0-2.913 7.174 4.622 7.174 8.239 0 9.052-7.585 3.98-9.696 1.891.131 3.176-1.742 2.062-3.783-1.36-2.513-5.449-3.243-8.455-2.482-2.651.672-4.234 2.37-4.234 4.542 0 5.875 9.193 4.443 8.889 6.446-.08.518-.883 1.068-2.218 1.068zm-5.171-7.514c0-3.953 8.219-4.392 9.872-1.344.258.474.303.92.123 1.224-.132.222-.377.35-.672.35-1.278 0-.703-2.708-4.322-2.708-2.996 0-3.889 2.113-2.89 3.306 1.758 2.15 8.674.914 8.674 5.256-.009 3.844-6.07 4.657-9.026 3.113-1.712-.914-2.951-3.452-1.234-3.452 1.339 0 .68 3.269 4.646 3.269 2.298 0 3.529-1.214 3.7-2.343.654-4.293-8.871-1.885-8.871-6.671zm7.966 1.317c-1.886-.558-4.173-.804-4.698-1.445-.236-.285.481-.85 1.733-.85 2.275 0 1.756 1.388 2.965 2.295z" />
                                    <path
                                        d="m13.966 23.302c.994.483 2.043.719 3.08.719 1.775 0 3.515-.694 4.882-2.032 2.106-2.063 2.666-5.058 1.461-7.696.707-3.568-.368-7.261-2.901-9.927-2.582-2.718-6.318-3.997-10.052-3.458-5.946-3.398-12.942 3.099-9.621 9.213-1.378 7.664 5.307 14.432 13.151 13.181zm-4.077-20.973c.58.361 5.383-1.272 9.512 3.07 4.063 4.276 2.228 8.722 2.533 9.325 2.364 4.709-2.85 9.596-7.499 7.134-.605-.319-5.346 1.335-9.507-2.927-4.133-4.234-2.321-8.723-2.679-9.324-2.861-4.813 2.798-10.281 7.64-7.278z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default leftsaidbar;