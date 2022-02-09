import React, { Component } from 'react';
import './WebTechnologies.css';


import Tabs from '../../Tabs/Tabs/tabs';
import Tabsname from '../../Tabs/tab/tab';
import Pannel from '../../Tabs/panel/pannel';
// tech images
import react from '../../../images/webdevlopment/tech/React-JS.svg';
import bootstrap from '../../../images/webdevlopment/tech/bootstrap-4.svg';
import vue from '../../../images/webdevlopment/tech/vue-js.svg'
import html from '../../../images/webdevlopment/tech/html-5.svg'
import css from '../../../images/webdevlopment/tech/css3.svg'
import scss from '../../../images/webdevlopment/tech/sass.svg'
import less from '../../../images/webdevlopment/tech/less.svg'
import javascript from '../../../images/webdevlopment/tech/javascript.png'
import jquery from '../../../images/webdevlopment/tech/jquery.svg'
import php from '../../../images/webdevlopment/tech/php.svg';
import node from '../../../images/webdevlopment/tech/nodejs.svg'
import mark from '../../../images/webdevlopment/mask5.svg';
import WordPress from '../../../images/webdevlopment/tech/WordPress.svg'
import opencart from '../../../images/webdevlopment/tech/opencart.svg'
import shopify from '../../../images/webdevlopment/tech/sopify.svg'
import shopifyplus from '../../../images/webdevlopment/tech/sopify-plus.svg'
import Magento from '../../../images/webdevlopment/tech/Magento.svg';
import woo from '../../../images/webdevlopment/tech/woocommerce.svg'
import shopware from '../../../images/webdevlopment/tech/shopware.svg'
import webflow from '../../../images/webdevlopment/tech/webflow.svg'
import Laravel from '../../../images/webdevlopment/tech/laravel.svg'
import codeigniter from '../../../images/webdevlopment/tech/Code-Igniter.svg'
import express from '../../../images/webdevlopment/tech/express-js.svg'
import soket from '../../../images/webdevlopment/tech/socket-io.svg'
import sequalize from '../../../images/webdevlopment/tech/sequelize.svg'
import mysql from '../../../images/webdevlopment/tech/MySQL.svg'
import postgre from '../../../images/webdevlopment/tech/postgresql.svg'
import mongodb from '../../../images/webdevlopment/tech/mongodb.svg'
import Redis from '../../../images/webdevlopment/tech/Redis.svg'

class WebTechnologies extends Component {
    render() {
        return (
            <section data-header-group="white_header" className="website-dev-tools">
                <div className="inner_content_wrap">
                    <div className="cm-section-title text-center  anim-title">
                        <div className="aos" data-aos="fade-right">
                            <h2>Web Technologies We Work With</h2>
                        </div>
                        <div className="seperator aos" data-aos="fade-up"></div>
                        <span>In-house specialists of contemporary web technologies that encapsulate server-side and
                        front-end stacks.</span>
                    </div>
                    {/* tab section start here*/}
                    <div className="website-dev-tools-tabs">
                         <Tabs>
                                <Tabsname><i className="flaticon-coding"></i><span>Frontend </span> </Tabsname>
                                <Pannel>
                                    <div className="website-dev-tools-tabs-inner">
                                    <div className="cat-img cfrontendimg">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 -64 512 512" width="512px" className="hovered-paths">
                                            <g>
                                                <path d="m215.921875 304.59375h16.03125v15.03125h-16.03125zm0 0" fill="#00e9cc" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00e9cc"></path>
                                                <path d="m247.984375 304.59375h16.03125v15.03125h-16.03125zm0 0" fill="#00e9cc" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00e9cc"></path>
                                                <path d="m280.046875 304.59375h16.03125v15.03125h-16.03125zm0 0" fill="#00e9cc" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00e9cc"></path>
                                                <path d="m0 0h57.113281v255.5h-57.113281zm0 0" fill="#00e9cc" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00e9cc"></path>
                                                <path d="m23.546875 40.078125h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 72.140625h80.15625v15.03125h-80.15625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m23.546875 72.140625h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m167.828125 72.140625h32.0625v15.03125h-32.0625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m127.75 104.203125h72.140625v15.03125h-72.140625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 104.203125h40.078125v15.03125h-40.078125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m23.546875 104.203125h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 40.078125h64.125v15.03125h-64.125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 136.265625h80.15625v15.03125h-80.15625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m23.546875 136.265625h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m167.828125 136.265625h32.0625v15.03125h-32.0625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 168.328125h32.0625v15.03125h-32.0625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m23.546875 168.328125h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m119.734375 168.328125h48.09375v15.03125h-48.09375zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m71.640625 200.390625h48.09375v15.03125h-48.09375zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m23.546875 200.390625h16.03125v15.03125h-16.03125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m135.765625 200.390625h64.125v15.03125h-64.125zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m512 255.5v-255.5h-239.46875v63.125h224.4375v177.34375h-209.40625v-160.8125h-15.03125v48.59375h-33.0625v-128.25h-191.375v255.503906h15.03125v-.003906h176.34375v-112.21875h33.0625v112.21875h152.296875v81.15625h-131.863281l-8.015625 8.015625h-57.898438l-8.015625-8.015625h-131.863281v-64.625h-15.03125v64.625h-16.03125v31.5625c0 8.5625 6.96875 15.53125 15.53125 15.53125h368.71875c8.5625 0 15.53125-6.96875 15.53125-15.53125v-31.5625h-16.03125v-81.15625zm-224.4375-207.40625v-33.0625h209.40625v33.0625zm-63.125 192.375h-161.3125v-225.4375h161.3125zm216.421875 111.21875v16.53125c0 .277344-.222656.5-.5.5h-368.71875c-.277344 0-.5-.222656-.5-.5v-16.53125h141.667969l8.015625 8.015625h70.351562l8.015625-8.015625zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <g fill="#00e9cc">
                                                    <path d="m312.109375 24.046875h16.03125v15.03125h-16.03125zm0 0" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00E9CC"></path>
                                                    <path d="m344.171875 24.046875h16.03125v15.03125h-16.03125zm0 0" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00E9CC"></path>
                                                    <path d="m376.234375 24.046875h16.03125v15.03125h-16.03125zm0 0" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00E9CC"></path>
                                                    <path d="m304.59375 80.15625h175.34375v63.125h-175.34375zm0 0" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00E9CC"></path>
                                                    <path d="m304.59375 160.3125h63.125v63.125h-63.125zm0 0" data-original="#00E9CC" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#00E9CC"></path>
                                                </g>
                                                <path d="m384.25 160.3125h96.1875v15.03125h-96.1875zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m384.25 184.359375h96.1875v15.03125h-96.1875zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                                <path d="m384.25 208.40625h96.1875v15.03125h-96.1875zm0 0" data-original="#121212" className="hovered-path" style={{ fill: '#121212' }} data-old_color="#121212"></path>
                                            </g>
                                        </svg>

                                    </div>
                                    <div className="website-dev-tools-tabs-content">
                                        <h4>Frontend Technologies we use:</h4>
                                        <ul>
                                            <li>
                                                <img src={react} alt="Sketch" />
                                                <span>React JS</span>
                                            </li>
                                            <li>
                                                <img src={vue} alt="Sketch" />
                                                <span>Vue JS</span>
                                            </li>
                                            <li>
                                                <img src={bootstrap} alt="Sketch" />
                                                <span>BootStrap</span>
                                            </li>
                                            <li>
                                                <img src={html} alt="Sketch" />
                                                <span>HTML5</span>
                                            </li>
                                            <li>
                                                <img src={css} alt="Sketch" />
                                                <span>CSS3</span>
                                            </li>
                                            <li>
                                                <img src={scss} alt="Sketch" />
                                                <span>Sass</span>
                                            </li>
                                            <li>
                                                <img src={less} alt="Sketch" />
                                                <span>Less</span>
                                            </li>
                                            <li>
                                                <img src={javascript} alt="Sketch" />
                                                <span>JavaScript</span>
                                            </li>
                                            <li>
                                                <img src={jquery} alt="Sketch" />
                                                <span>jQuery</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </Pannel>

                                <Tabsname><i className="flaticon-ui"></i><span>Languages</span>  </Tabsname>
                                <Pannel>
                                        <div className="website-dev-tools-tabs-inner">
                                            <div className="cat-img clanguage">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="512px" viewBox="0 0 64 64" width="512px"
                                                    className="">
                                                    <g>
                                                        <g id="computer_coding" data-name="computer coding">
                                                            <path
                                                                d="m59 14h-7v-9a3.009 3.009 0 0 0 -3-3h-34a3.009 3.009 0 0 0 -3 3v9h-7a3.009 3.009 0 0 0 -3 3v32a3.009 3.009 0 0 0 3 3h19.82l-.67 4h-3.15a1.014 1.014 0 0 0 -.8.4l-3 4a1 1 0 0 0 -.09 1.05.977.977 0 0 0 .89.55h28a.977.977 0 0 0 .89-.55 1 1 0 0 0 -.09-1.05l-3-4a1.014 1.014 0 0 0 -.8-.4h-3.15l-.67-4h19.82a3.009 3.009 0 0 0 3-3v-32a3.009 3.009 0 0 0 -3-3zm-45-9a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v5h-36zm0 7h36v23a1 1 0 0 1 -1 1h-34a1 1 0 0 1 -1-1zm28.5 46 1.5 2h-24l1.5-2zm-16.32-2 .67-4h10.3l.67 4zm33.82-7a1 1 0 0 1 -1 1h-54a1 1 0 0 1 -1-1v-3h56zm0-5h-56v-27a1 1 0 0 1 1-1h7v19a3.009 3.009 0 0 0 3 3h4v2h-7v2h8a1 1 0 0 0 1-1v-3h6v4h2v-4h6v4h2v-4h6v3a1 1 0 0 0 1 1h8v-2h-7v-2h4a3.009 3.009 0 0 0 3-3v-19h7a1 1 0 0 1 1 1z"
                                                                data-original="#121212" className="active-path" data-old_color="#121212"
                                                                fill="#121212" />
                                                            <path d="m46 6h2v2h-2z" data-original="#5cda94" className="active-path"
                                                                data-old_color="#5cda94" fill="#5cda94" />
                                                            <path d="m42 6h2v2h-2z" data-original="#5cda94" className="active-path"
                                                                data-old_color="#5cda94" fill="#5cda94" />
                                                            <path d="m38 6h2v2h-2z" data-original="#5cda94" className="active-path"
                                                                data-old_color="#5cda94" fill="#5cda94" />
                                                            <path
                                                                d="m26.293 17.293-6 6a1 1 0 0 0 0 1.414l6 6 1.414-1.414-5.293-5.293 5.293-5.293z"
                                                                data-original="#121212" className="active-path" data-old_color="#121212"
                                                                fill="#121212" />
                                                            <path
                                                                d="m37.707 17.293-1.414 1.414 5.293 5.293-5.293 5.293 1.414 1.414 6-6a1 1 0 0 0 0-1.414z"
                                                                data-original="#121212" className="active-path" data-old_color="#121212"
                                                                fill="#121212" />
                                                            <path d="m22.513 23h18.974v2h-18.974z"
                                                                transform="matrix(.316 -.949 .949 .316 -.891 46.763)"
                                                                data-original="#5cda94" className="active-path" data-old_color="#5cda94"
                                                                fill="#5cda94" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="website-dev-tools-tabs-content">
                                                <h4>Languages We Use:</h4>
                                                <ul>
                                                    <li>
                                                        <img src={php} alt="Sketch" />
                                                        <span>PHP</span>
                                                    </li>
                                                    <li>
                                                        <img src={node} alt="Sketch" />
                                                        <span>Node JS</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={mark} className="fkdfnv" />
                                        </div>
                                 </Pannel>

                                <Tabsname><i className="flaticon-cms"></i><span>CMS</span>  </Tabsname>
                                <Pannel>
                                        <div className="website-dev-tools-tabs-inner">
                                            <div className="cat-img ccms">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512" height="512">
                                                    <g id="monitor">
                                                        <rect x="31" y="47" width="2" height="2" fill="#5cdb95" />
                                                        <path
                                                            d="M59,2H5A3,3,0,0,0,2,5V49a3,3,0,0,0,3,3H24.82l-.667,4H23a1,1,0,0,0-.8.4l-3,4A1,1,0,0,0,20,62H44a1,1,0,0,0,.8-1.6l-3-4A1,1,0,0,0,41,56H39.847l-.667-4H59a3,3,0,0,0,3-3V5A3,3,0,0,0,59,2ZM5,4H59a1,1,0,0,1,1,1V44H4V5A1,1,0,0,1,5,4ZM42,60H22l1.5-2h17Zm-4.18-4H26.18l.667-4H37.153ZM59,50H5a1,1,0,0,1-1-1V46H60v3A1,1,0,0,1,59,50Z" />
                                                        <path
                                                            d="M49,18a4,4,0,1,0-4-4A4,4,0,0,0,49,18Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,49,12Z" fill="rgba(92, 219, 149, 0.46)" />
                                                        <path
                                                            d="M40.758,16.97l.668.167-.355.591a1,1,0,0,0,.151,1.221l2.829,2.829a1,1,0,0,0,1.221.151l.591-.355.167.668A1,1,0,0,0,47,23h4a1,1,0,0,0,.97-.758l.167-.668.591.355a1,1,0,0,0,1.221-.151l2.829-2.829a1,1,0,0,0,.151-1.221l-.355-.591.668-.167A1,1,0,0,0,58,16V12a1,1,0,0,0-.758-.97l-.668-.167.355-.591a1,1,0,0,0-.151-1.221L53.949,6.222a1,1,0,0,0-1.221-.151l-.591.355-.167-.668A1,1,0,0,0,51,5H47a1,1,0,0,0-.97.758l-.167.668-.591-.355a1,1,0,0,0-1.221.151L41.222,9.051a1,1,0,0,0-.151,1.221l.355.591-.668.167A1,1,0,0,0,40,12v4A1,1,0,0,0,40.758,16.97ZM42,12.781l1.22-.3a1,1,0,0,0,.615-1.485l-.647-1.078,1.725-1.725,1.078.647a1,1,0,0,0,1.485-.615l.3-1.22h2.438l.3,1.22a1,1,0,0,0,1.485.615l1.078-.647,1.726,1.725-.648,1.078a1,1,0,0,0,.615,1.485l1.22.3v2.438l-1.22.3a1,1,0,0,0-.615,1.485l.648,1.078-1.726,1.726-1.078-.648a1,1,0,0,0-1.485.615l-.3,1.22H47.781l-.3-1.22a1,1,0,0,0-1.485-.615l-1.078.648-1.725-1.726.647-1.078a1,1,0,0,0-.615-1.485l-1.22-.3Z" />
                                                        <path
                                                            d="M49,30a4,4,0,1,0,4,4A4,4,0,0,0,49,30Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,49,36Z" fill="rgba(92, 219, 149, 0.46)" />
                                                        <path
                                                            d="M57.242,31.03l-.668-.167.355-.591a1,1,0,0,0-.151-1.221l-2.829-2.829a1,1,0,0,0-1.221-.151l-.591.355-.167-.668A1,1,0,0,0,51,25H47a1,1,0,0,0-.97.758l-.167.668-.591-.355a1,1,0,0,0-1.221.151l-2.829,2.829a1,1,0,0,0-.151,1.221l.355.591-.668.167A1,1,0,0,0,40,32v4a1,1,0,0,0,.758.97l.668.167-.355.591a1,1,0,0,0,.151,1.221l2.829,2.829a1,1,0,0,0,1.221.151l.591-.355.167.668A1,1,0,0,0,47,43h4a1,1,0,0,0,.97-.758l.167-.668.591.355a1,1,0,0,0,1.221-.151l2.829-2.829a1,1,0,0,0,.151-1.221l-.355-.591.668-.167A1,1,0,0,0,58,36V32A1,1,0,0,0,57.242,31.03ZM56,35.219l-1.22.3a1,1,0,0,0-.615,1.485l.648,1.078-1.726,1.726-1.078-.648a1,1,0,0,0-1.485.615l-.3,1.22H47.781l-.3-1.22a1,1,0,0,0-1.485-.615l-1.078.648-1.725-1.726.647-1.078a1,1,0,0,0-.615-1.485l-1.22-.3V32.781l1.22-.3a1,1,0,0,0,.615-1.485l-.647-1.078,1.725-1.725,1.078.647a1,1,0,0,0,1.485-.615l.3-1.22h2.438l.3,1.22a1,1,0,0,0,1.485.615l1.078-.647,1.726,1.725-.648,1.078a1,1,0,0,0,.615,1.485l1.22.3Z" />
                                                        <path
                                                            d="M7,18H31a1,1,0,0,0,1-1V13h2v8a1,1,0,0,0,1,1h5V20H36V12a1,1,0,0,0-1-1H32V7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7V17A1,1,0,0,0,7,18ZM8,8H30v8H8Z" />
                                                        <path
                                                            d="M7,28H17a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1v6A1,1,0,0,0,7,28Zm1-6h8v4H8Z" fill="rgba(92, 219, 149, 0.46)" />
                                                        <path
                                                            d="M31,20H21a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20Zm-1,6H22V22h8Z" fill="rgba(92, 219, 149, 0.46)" />
                                                        <path
                                                            d="M7,42H31a1,1,0,0,0,1-1V37h3a1,1,0,0,0,1-1V28h4V26H35a1,1,0,0,0-1,1v8H32V31a1,1,0,0,0-1-1H7a1,1,0,0,0-1,1V41A1,1,0,0,0,7,42ZM8,32H30v8H8Z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="website-dev-tools-tabs-content">
                                                <h4>CMS:</h4>
                                                <ul>
                                                    <li>
                                                        <img src={WordPress} alt="Sketch" />
                                                        <span>WordPress</span>
                                                    </li>
                                                    <li>
                                                        <img src={opencart} alt="Sketch" />
                                                        <span>Opencart</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={mark} className="fkdfnv" />
                                        </div>
                                 </Pannel>

                                <Tabsname><i className="flaticon-store"></i><span>Ecommerce</span>  </Tabsname>
                                <Pannel>
                                            <div className="website-dev-tools-tabs-inner">
                                                <div className="cat-img cecomerse">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xml space="preserve">
                                                        <path d="M469.333,21.333H42.667C19.146,21.333,0,40.469,0,64v298.667c0,23.531,19.146,42.667,42.667,42.667h149.381     c-0.448,17.018-3.698,44.24-15.902,57.094c-4.479,4.708-9.604,6.906-16.146,6.906c-5.896,0-10.667,4.771-10.667,10.667     c0,5.896,4.771,10.667,10.667,10.667h192c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667     c-6.542,0-11.667-2.188-16.125-6.896c-12.174-12.79-15.445-40.051-15.91-57.104h149.369c23.521,0,42.667-19.135,42.667-42.667V64     C512,40.469,492.854,21.333,469.333,21.333z M197.729,469.333c12.874-19.749,15.375-48.188,15.694-64h85.155     c0.319,15.813,2.819,44.251,15.693,64H197.729z M490.667,362.667c0,11.76-9.563,21.333-21.333,21.333H42.667     c-11.771,0-21.333-9.573-21.333-21.333V320h469.333V362.667z M490.667,298.667H21.333V64c0-11.76,9.563-21.333,21.333-21.333     h426.667c11.771,0,21.333,9.573,21.333,21.333V298.667z" />
                                                        <circle cx="256" cy="352" r="21.333" fill="#5cdb95" />
                                                        <path fill="#5cdb95" d="M352,149.333h-36.073l-29.052-58.104c-2.646-5.281-9.042-7.396-14.313-4.771c-5.271,2.635-7.396,9.042-4.771,14.313     l24.281,48.563h-72.146l24.281-48.563c2.625-5.271,0.5-11.677-4.771-14.313c-5.271-2.604-11.646-0.49-14.313,4.771     l-29.052,58.104H160c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667h13l17.292,69.167     C192.667,249.354,201.188,256,211,256h90c9.813,0,18.333-6.646,20.708-16.167L339,170.667h13c5.896,0,10.667-4.771,10.667-10.667     S357.896,149.333,352,149.333z M301,234.667h-90l-16-64h122L301,234.667z" />
                                                    </svg>
                                                </div>
                                                <div className="website-dev-tools-tabs-content">
                                                    <h4>Ecommerce:</h4>
                                                    <ul>
                                                        <li>
                                                            <img src={shopify} alt="Sketch" />
                                                            <span>Shopify</span>
                                                        </li>
                                                        <li>
                                                            <img src={shopifyplus} alt="Sketch" />
                                                            <span>Shopify Plus</span>
                                                        </li>
                                                        <li>
                                                            <img src={Magento} alt="Sketch" />
                                                            <span>Magento</span>
                                                        </li>
                                                        <li>
                                                            <img src={woo} alt="Sketch" />
                                                            <span>Woocommerce</span>
                                                        </li>
                                                        <li>
                                                            <img src={shopware} alt="Sketch" />
                                                            <span>Shopware</span>
                                                        </li>
                                                        <li>
                                                            <img src={webflow} alt="Sketch" />
                                                            <span>Webflow</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src={mark} className="fkdfnv" />
                                            </div>
                                </Pannel>
                                <Tabsname><i className="flaticon-framework"></i><span>Frameworks</span>  </Tabsname>
                                <Pannel>
                                            <div className="website-dev-tools-tabs-inner">
                                                <div className="cat-img cframe">
                                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" enableBackground="new 0 0 64 64" height="512px" viewBox="0 0 64 64" width="512px" className="">
                                                        <g>
                                                            <g>
                                                                <g>
                                                                    <g>
                                                                        <path d="m32 15c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7zm0-9c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" fill="#f0bc5e" data-original="#F0BC5E" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#f0bc5e" />
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path d="m8.011 50.998c-2.422 0-4.779-1.256-6.074-3.499-1.929-3.343-.78-7.632 2.563-9.563 1.62-.936 3.506-1.185 5.312-.699 1.806.483 3.316 1.643 4.251 3.262 1.929 3.343.78 7.632-2.563 9.563-1.101.634-2.303.936-3.489.936zm-.015-8.998c-.346 0-.687.091-.995.269-.953.551-1.281 1.774-.731 2.727s1.774 1.281 2.727.731c.953-.551 1.281-1.774.731-2.727-.267-.462-.697-.792-1.212-.93-.172-.047-.347-.07-.52-.07z" fill="#f0bc5e" data-original="#F0BC5E" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#f0bc5e" />
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <g>
                                                                        <path d="m55.989 50.998c-1.187 0-2.389-.302-3.488-.937-3.342-1.931-4.492-6.22-2.563-9.563.935-1.619 2.445-2.778 4.251-3.262 1.807-.486 3.693-.235 5.312.699 3.342 1.931 4.492 6.22 2.563 9.563-1.295 2.244-3.653 3.5-6.075 3.5zm-.987-5.27c.954.551 2.178.223 2.728-.731.551-.954.223-2.177-.731-2.728-.462-.267-1.001-.337-1.515-.2-.515.138-.946.468-1.213.931-.55.953-.222 2.177.731 2.728z" fill="#f0bc5e" data-original="#F0BC5E" className="active-path" style={{ fill: '#5CDB95' }} data-old_color="#f0bc5e" />
                                                                    </g>
                                                                </g>
                                                                <g>
                                                                    <path d="m32 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .448 1 1s-.449 1-1 1-1-.448-1-1 .449-1 1-1z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m6.5 41.4c-1.433.828-1.925 2.666-1.099 4.099.555.961 1.565 1.499 2.604 1.499.508 0 1.023-.129 1.495-.4 1.432-.828 1.924-2.666 1.098-4.099-.828-1.432-2.667-1.925-4.098-1.099zm2 3.465c-.479.277-1.091.111-1.366-.366-.276-.478-.111-1.091.366-1.366.477-.276 1.09-.11 1.365.366.276.478.111 1.091-.365 1.366z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m57.5 41.4c-1.432-.825-3.271-.332-4.098 1.099-.827 1.433-.334 3.271 1.098 4.099h.001c.471.271.986.4 1.494.4 1.038 0 2.049-.538 2.604-1.499.827-1.433.334-3.27-1.099-4.099zm-.633 3.099c-.275.478-.889.643-1.365.366-.478-.275-.642-.889-.366-1.366.275-.478.888-.644 1.365-.366.477.275.642.888.366 1.366z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m62.33 16.5c-.668-1.156-1.746-1.983-3.036-2.329-1.289-.349-2.637-.168-3.794.499-1.157.668-1.984 1.746-2.33 3.036-.231.861-.208 1.743.018 2.581l-10.188 5.095v-6.382h-10v-4.08c-.328.047-.66.08-1 .08s-.672-.033-1-.08v4.08h-10v6.381l-10.188-5.094c.226-.838.249-1.72.018-2.581-.346-1.29-1.173-2.368-2.33-3.036-1.157-.667-2.505-.848-3.794-.499-1.29.346-2.368 1.173-3.036 2.329s-.846 2.504-.5 3.794 1.173 2.368 2.33 3.036c.771.444 1.625.672 2.492.672.435 0 .872-.057 1.302-.173 1.059-.284 1.96-.905 2.623-1.753l11.083 5.541v8.763l-7.255 3.627c.11.159.218.321.316.491.242.419.435.854.582 1.296l6.357-3.177v6.383h10v8.101c-2.279.465-4 2.484-4 4.899 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.414-1.721-4.434-4-4.899v-8.101h10v-6.383l6.356 3.178c.147-.443.34-.877.582-1.296.098-.17.206-.332.316-.491l-7.254-3.627v-8.763l11.082-5.542c.664.848 1.565 1.469 2.624 1.753.431.116.868.173 1.302.173.866 0 1.721-.228 2.492-.672 1.157-.668 1.984-1.746 2.33-3.036s.168-2.638-.5-3.794zm-53.732 4c-.827 1.433-2.666 1.926-4.098 1.098-.694-.4-1.19-1.048-1.398-1.821-.207-.774-.101-1.582.3-2.276.555-.961 1.565-1.499 2.603-1.499.509 0 1.024.129 1.495.401.694.4 1.19 1.048 1.398 1.821.207.774.101 1.582-.3 2.276zm26.402 37.5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm6-15h-18v-22h18zm19.898-23.224c-.208.773-.704 1.421-1.398 1.821-1.432.828-3.271.335-4.098-1.098-.4-.694-.507-1.502-.3-2.276.208-.773.704-1.421 1.398-1.821.471-.272.986-.401 1.495-.401 1.038 0 2.048.538 2.603 1.499.401.694.507 1.502.3 2.276z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" /><path d="m39 31h-6v2h-4v2h-4v6h14zm-12 6h2v2h-2zm4 2v-4h2v4zm6 0h-2v-6h2z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m25 23h2v2h-2z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m29 23h10v2h-10z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                    <path d="m25 27h14v2h-14z" data-original="#121212" className="" style={{ fill: '#121212' }} data-old_color="#121212" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="website-dev-tools-tabs-content">
                                                    <h4 className="mt-25">Framework We use:</h4>
                                                    <ul>
                                                        <li>
                                                            <img src={Laravel} alt="Sketch" />
                                                            <span>Laravel</span>
                                                        </li>
                                                        <li>
                                                            <img src={codeigniter} alt="Sketch" />
                                                            <span>Codeigniter</span>
                                                        </li>
                                                        <li>
                                                            <img src={express} alt="Sketch" />
                                                            <span>Express JS</span>
                                                        </li>
                                                        <li>
                                                            <img src={soket} alt="Sketch" />
                                                            <span>Socket IO</span>
                                                        </li>
                                                        <li>
                                                            <img src={sequalize} alt="Sketch" />
                                                            <span>Sequelize</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src={mark} className="fkdfnv" />
                                            </div>
                           
                                </Pannel>
                                <Tabsname><i className="flaticon-integration"></i><span>Database</span>  </Tabsname>
                                <Pannel>
                                        <div className="website-dev-tools-tabs-inner">
                                            <div className="cat-img cdb">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512">
                                                    <g id="Server-database-big_data-configuration-computer" data-name="Server-database-big data-configuration-computer">
                                                        <path fill="#5cdb95" d="m9 17a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" />
                                                        <path fill="#5cdb95" d="m9 29a3 3 0 1 0 -3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1 -1 1 1 1 0 0 1 1-1z" />
                                                        <path fill="#5cdb95" d="m9 35a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
                                                        <path fill="#5cdb95" d="m9 47a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
                                                        <path d="m14 13h2v2h-2z" /><path d="m18 13h2v2h-2z" /><path d="m22 13h2v2h-2z" /><path d="m26 13h2v2h-2z" />
                                                        <path d="m30 13h2v2h-2z" /><path d="m34 13h2v2h-2z" /><path d="m14 25h2v2h-2z" /><path d="m18 25h2v2h-2z" />
                                                        <path d="m22 25h2v2h-2z" /><path d="m26 25h2v2h-2z" /><path d="m30 25h2v2h-2z" /><path d="m34 25h2v2h-2z" />
                                                        <path d="m14 37h2v2h-2z" /><path d="m18 37h2v2h-2z" /><path d="m22 37h2v2h-2z" /><path d="m14 49h2v2h-2z" />
                                                        <path d="m18 49h2v2h-2z" />
                                                        <path fill="rgba(255, 255, 255, 0.22)" d="m59 2h-14a3.009 3.009 0 0 0 -3 3v8a3.009 3.009 0 0 0 3 3h4v2h-2v2h4v2h2v-2h4v-2h-2v-2h4a3.009 3.009 0 0 0 3-3v-8a3.009 3.009 0 0 0 -3-3zm-6 16h-2v-2h2zm7-5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-1h16zm0-3h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
                                                        <path d="m53 42h-1.93l1.37-1.36a1.008 1.008 0 0 0 0-1.42l-5.66-5.66a1.008 1.008 0 0 0 -1.42 0l-1.36 1.37v-1.93a1 1 0 0 0 -1-1h-3v-24a1 1 0 0 0 -1-1h-36a1 1 0 0 0 -1 1v48a1 1 0 0 0 1 1h24.79l3.43 3.44a1.008 1.008 0 0 0 1.42 0l1.36-1.37v1.93a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.93l1.36 1.37a1.008 1.008 0 0 0 1.42 0l5.66-5.66a1.008 1.008 0 0 0 0-1.42l-1.37-1.36h1.93a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1zm-49-33h34v10h-34zm0 12h34v10h-34zm0 12h30v1.93l-1.36-1.37a1.008 1.008 0 0 0 -1.42 0l-5.66 5.66a1.008 1.008 0 0 0 0 1.42l1.37 1.36h-1.93a1 1 0 0 0 -1 1h-20zm21.56 21.78.23.22h-21.79v-10h20v6a1 1 0 0 0 1 1h1.93l-1.37 1.36a1.008 1.008 0 0 0 0 1.42zm26.44-4.78h-3.34a1 1 0 0 0 -.71 1.71l2.36 2.36-4.24 4.24-2.36-2.36a1 1 0 0 0 -1.71.71v3.34h-6v-3.34a1 1 0 0 0 -1.71-.71l-2.36 2.36-4.24-4.24 2.36-2.36a1 1 0 0 0 -.71-1.71h-3.34v-6h3.34a1 1 0 0 0 .71-1.71l-2.36-2.36 4.24-4.24 2.36 2.36a1 1 0 0 0 1.71-.71v-3.34h6v3.34a1 1 0 0 0 1.71.71l2.36-2.36 4.24 4.24-2.36 2.36a1 1 0 0 0 .71 1.71h3.34z" />
                                                        <path fill="#5cdb95" d="m39 40a7 7 0 1 0 7 7 7.008 7.008 0 0 0 -7-7zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1 -5 5z" />
                                                        <path d="m42 25h2v2h-2z" /><path d="m46 25h2v2h-2z" /><path d="m54 32h2v2h-2z" /><path d="m61 32h-3v2h2v2h2v-3a1 1 0 0 0 -1-1z" />
                                                        <path d="m50 32h2v2h-2z" /><path d="m60 38h2v2h-2z" /><path d="m60 42h2v2h-2z" /><path d="m60 46h2v2h-2z" /><path d="m60 50h2v2h-2z" />
                                                        <path d="m60 54h2v2h-2z" /><path d="m60 60h-2v2h3a1 1 0 0 0 1-1v-3h-2z" /><path d="m54 60h2v2h-2z" /><path d="m50 60h2v2h-2z" />
                                                        <path d="m53 26v-2h-2v1h-1v2h2a1 1 0 0 0 1-1z" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="website-dev-tools-tabs-content">
                                                <h4 className="mt-25">Database:</h4>
                                                <ul>
                                                    <li>
                                                        <img src={mysql} alt="Sketch" />
                                                        <span>MySQL</span>
                                                    </li>
                                                    <li>
                                                        <img src={postgre} alt="Sketch" />
                                                        <span>PostgreSQL</span>
                                                    </li>
                                                    <li>
                                                        <img src={mongodb} alt="Sketch" />
                                                        <span>Mongo DB</span>
                                                    </li>
                                                    <li>
                                                        <img src={Redis} alt="Sketch" />
                                                        <span>Redis</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <img src={mark} className="fkdfnv" />
                                        </div>
                                 </Pannel>
                         </Tabs>
                    </div>
                </div>
            </section >
        );
    }
}

export default WebTechnologies;