import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.css';
import ReactFullpage from '@fullpage/react-fullpage';
import remove from '../images/e-remove.svg'
import MenuToggle from '../images/toggle-btn.svg'
// import HeaderContent from './header/Header_content'
class Header extends Component {

    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }


    render() {
        function refreshPage() {
            window.location.reload(false);
        }
        return (
            <div className="header-block">
                <div className="container">
                    <div className="header-top">
                        <div className="container">
                            <div className="logo">
                                <Link to="/" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="677.657" height="133.781" viewBox="0 0 677.657 133.781">
                                        <defs>
                                        </defs>
                                        <path id="studio" className="cls-1" d="M181.031,335h1.224V319.3H188.3v-1.1h-13.32v1.1h6.048V335Zm19.368-9.792v-2.736h-1.152V335h1.2v-6.528a5.24,5.24,0,0,1,1.176-3.636,4.163,4.163,0,0,1,3.264-1.308l0.288,0.024v-1.176a5.7,5.7,0,0,0-2.976.732,4.335,4.335,0,0,0-1.8,2.1h0Zm20.952-2.832a8.2,8.2,0,0,0-2.76.468,6.669,6.669,0,0,0-2.256,1.308l0.6,0.864a5.991,5.991,0,0,1,1.932-1.152,6.682,6.682,0,0,1,2.388-.432,3.847,3.847,0,0,1,2.772.912,3.528,3.528,0,0,1,.948,2.664v1.008h-4.3a5.361,5.361,0,0,0-3.564.972,3.4,3.4,0,0,0,.1,5.124,5.087,5.087,0,0,0,3.3.984,5.81,5.81,0,0,0,2.76-.612,4.168,4.168,0,0,0,1.752-1.716V335h1.152v-7.944a4.6,4.6,0,0,0-1.248-3.492,4.987,4.987,0,0,0-3.576-1.188h0Zm-0.672,11.736a4.1,4.1,0,0,1-2.568-.708,2.314,2.314,0,0,1-.912-1.932,2.251,2.251,0,0,1,.828-1.848,4.251,4.251,0,0,1,2.676-.672h4.272V331.3a4.378,4.378,0,0,1-1.644,2.088,4.711,4.711,0,0,1-2.652.72h0Zm25.2-11.736a5.948,5.948,0,0,0-3.036.744,4.765,4.765,0,0,0-1.932,2.064v-2.712h-1.152V335h1.2v-6.672a4.9,4.9,0,0,1,1.272-3.552,4.6,4.6,0,0,1,3.48-1.32,3.965,3.965,0,0,1,2.988,1.1,4.45,4.45,0,0,1,1.068,3.216V335h1.2v-7.32a5.328,5.328,0,0,0-1.368-3.936,5.027,5.027,0,0,0-3.72-1.368h0Zm21.839,12.72a6.149,6.149,0,0,0,3.648-.936,2.93,2.93,0,0,0,1.3-2.5,2.61,2.61,0,0,0-.624-1.848,3.593,3.593,0,0,0-1.524-.972,17.6,17.6,0,0,0-2.364-.564q-1.32-.264-2.052-0.492a3.172,3.172,0,0,1-1.236-.7,1.7,1.7,0,0,1-.5-1.308,2.013,2.013,0,0,1,.888-1.7,4.461,4.461,0,0,1,2.64-.648,7.14,7.14,0,0,1,2.016.288,5.734,5.734,0,0,1,1.752.84l0.552-.96a5.946,5.946,0,0,0-1.92-.888,8.609,8.609,0,0,0-2.376-.336,5.574,5.574,0,0,0-3.516.972,3,3,0,0,0-1.236,2.46,2.708,2.708,0,0,0,.648,1.92,3.761,3.761,0,0,0,1.56,1.008,16.634,16.634,0,0,0,2.4.576q1.272,0.24,1.992.456a3.034,3.034,0,0,1,1.212.672,1.618,1.618,0,0,1,.492,1.248,1.988,1.988,0,0,1-.9,1.728,4.97,4.97,0,0,1-2.8.624,7.485,7.485,0,0,1-2.532-.432,6.348,6.348,0,0,1-1.98-1.08l-0.552.96a5.956,5.956,0,0,0,2.136,1.152,9.047,9.047,0,0,0,2.88.456h0Zm23.232-12.72a5.84,5.84,0,0,0-3.036.8,5.468,5.468,0,0,0-2.1,2.244v-2.952h-1.152v17.184h1.2v-7.512a5.4,5.4,0,0,0,2.088,2.172,5.867,5.867,0,0,0,3,.78,6.3,6.3,0,0,0,3.168-.8,5.735,5.735,0,0,0,2.22-2.256,6.7,6.7,0,0,0,.8-3.3,6.629,6.629,0,0,0-.8-3.288,5.841,5.841,0,0,0-2.22-2.256,6.23,6.23,0,0,0-3.168-.816h0Zm-0.072,11.64a4.984,4.984,0,0,1-2.58-.672,4.825,4.825,0,0,1-1.8-1.872,6,6,0,0,1,0-5.472,4.825,4.825,0,0,1,1.8-1.872,4.984,4.984,0,0,1,2.58-.672,5.048,5.048,0,0,1,2.592.672A4.8,4.8,0,0,1,295.282,326a6,6,0,0,1,0,5.472,4.8,4.8,0,0,1-1.812,1.872,5.048,5.048,0,0,1-2.592.672h0Zm22.8-11.64a8.2,8.2,0,0,0-2.76.468,6.669,6.669,0,0,0-2.256,1.308l0.6,0.864a5.991,5.991,0,0,1,1.932-1.152,6.682,6.682,0,0,1,2.388-.432,3.847,3.847,0,0,1,2.772.912,3.528,3.528,0,0,1,.948,2.664v1.008h-4.3a5.361,5.361,0,0,0-3.564.972,3.4,3.4,0,0,0,.1,5.124,5.087,5.087,0,0,0,3.3.984,5.81,5.81,0,0,0,2.76-.612,4.168,4.168,0,0,0,1.752-1.716V335H318.5v-7.944a4.6,4.6,0,0,0-1.248-3.492,4.987,4.987,0,0,0-3.576-1.188h0Zm-0.672,11.736a4.1,4.1,0,0,1-2.568-.708,2.314,2.314,0,0,1-.912-1.932,2.251,2.251,0,0,1,.828-1.848,4.251,4.251,0,0,1,2.676-.672H317.3V331.3a4.378,4.378,0,0,1-1.644,2.088,4.711,4.711,0,0,1-2.652.72h0Zm20.232-8.9v-2.736h-1.152V335h1.2v-6.528a5.245,5.245,0,0,1,1.176-3.636,4.165,4.165,0,0,1,3.264-1.308l0.288,0.024v-1.176a5.7,5.7,0,0,0-2.976.732,4.335,4.335,0,0,0-1.8,2.1h0Zm27.216,3.48a6.742,6.742,0,0,0-.78-3.264,5.715,5.715,0,0,0-2.136-2.244,6.208,6.208,0,0,0-6.132.012,5.753,5.753,0,0,0-2.148,2.268,6.812,6.812,0,0,0-.78,3.276,6.477,6.477,0,0,0,.828,3.288,5.916,5.916,0,0,0,2.292,2.256,7.146,7.146,0,0,0,6.012.288,5.347,5.347,0,0,0,2.052-1.512l-0.7-.792a4.417,4.417,0,0,1-1.74,1.308,5.735,5.735,0,0,1-2.268.444,5.666,5.666,0,0,1-2.676-.624,4.761,4.761,0,0,1-1.884-1.764,5.236,5.236,0,0,1-.744-2.6H360.43Zm-5.976-5.256a4.661,4.661,0,0,1,4.08,2.256,5.025,5.025,0,0,1,.72,2.4h-9.6a5.4,5.4,0,0,1,.732-2.412,4.48,4.48,0,0,1,1.692-1.656,4.8,4.8,0,0,1,2.376-.588h0Zm24.456-1.056a5.946,5.946,0,0,0-3.036.744,4.759,4.759,0,0,0-1.932,2.064v-2.712h-1.152V335h1.2v-6.672a4.9,4.9,0,0,1,1.272-3.552,4.6,4.6,0,0,1,3.48-1.32,3.967,3.967,0,0,1,2.988,1.1,4.45,4.45,0,0,1,1.068,3.216V335h1.2v-7.32a5.328,5.328,0,0,0-1.368-3.936,5.027,5.027,0,0,0-3.72-1.368h0ZM402.6,335.1a6.316,6.316,0,0,0,2.748-.588,4.96,4.96,0,0,0,2-1.716l-0.888-.648a4.264,4.264,0,0,1-1.668,1.4,5.1,5.1,0,0,1-2.2.468,5.234,5.234,0,0,1-2.628-.66,4.69,4.69,0,0,1-1.824-1.86,6.1,6.1,0,0,1,0-5.52,4.69,4.69,0,0,1,1.824-1.86,5.234,5.234,0,0,1,2.628-.66,5.1,5.1,0,0,1,2.2.468,4.264,4.264,0,0,1,1.668,1.4l0.888-.648a4.96,4.96,0,0,0-2-1.716,6.316,6.316,0,0,0-2.748-.588,6.58,6.58,0,0,0-3.264.8,5.771,5.771,0,0,0-2.256,2.256,7.032,7.032,0,0,0,0,6.576,5.854,5.854,0,0,0,2.256,2.268,6.5,6.5,0,0,0,3.264.816h0Zm25.608-12.624-5.016,11.208-5.016-11.208H416.9l5.64,12.48-0.672,1.512a4.51,4.51,0,0,1-1.2,1.728,2.465,2.465,0,0,1-1.56.5,3.132,3.132,0,0,1-2.328-.984l-0.6.912a3.447,3.447,0,0,0,1.284.84,4.512,4.512,0,0,0,1.62.288,3.688,3.688,0,0,0,2.244-.7A5.631,5.631,0,0,0,423,336.7l6.432-14.232h-1.224Zm11.52,12.624a0.968,0.968,0,0,0,.708-0.3,1,1,0,0,0,.3-0.732,0.957,0.957,0,0,0-.3-0.72,1.014,1.014,0,0,0-1.416,0,0.957,0.957,0,0,0-.3.72,1,1,0,0,0,.3.732,0.968,0.968,0,0,0,.708.3h0Zm20.593,0.024a9.184,9.184,0,0,0,3.348-.6,7.027,7.027,0,0,0,2.628-1.752l-0.768-.792a7.041,7.041,0,0,1-5.16,2.016,7.77,7.77,0,0,1-3.84-.96,7.018,7.018,0,0,1-2.712-2.652,7.752,7.752,0,0,1,0-7.56,7.018,7.018,0,0,1,2.712-2.652,7.77,7.77,0,0,1,3.84-.96,7.034,7.034,0,0,1,5.16,1.992l0.768-.792a6.932,6.932,0,0,0-2.616-1.74,9.331,9.331,0,0,0-3.36-.588,8.982,8.982,0,0,0-4.452,1.1,8.15,8.15,0,0,0-3.12,3.048,8.938,8.938,0,0,0,0,8.736,8.15,8.15,0,0,0,3.12,3.048,8.982,8.982,0,0,0,4.452,1.1h0Zm22.656-.024a6.347,6.347,0,0,0,3.2-.816,5.892,5.892,0,0,0,2.244-2.268,6.984,6.984,0,0,0,0-6.552,5.892,5.892,0,0,0-2.244-2.268,6.7,6.7,0,0,0-6.408,0,5.865,5.865,0,0,0-2.244,2.268,6.984,6.984,0,0,0,0,6.552,5.865,5.865,0,0,0,2.244,2.268,6.337,6.337,0,0,0,3.2.816h0Zm0-1.08a4.982,4.982,0,0,1-2.58-.672,4.811,4.811,0,0,1-1.8-1.872,6,6,0,0,1,0-5.472,4.811,4.811,0,0,1,1.8-1.872,5.289,5.289,0,0,1,5.16,0,4.839,4.839,0,0,1,1.8,1.872,6,6,0,0,1,0,5.472,4.839,4.839,0,0,1-1.8,1.872,4.987,4.987,0,0,1-2.58.672h0ZM501.6,335h1.2V317.192h-1.2V335Zm14.9,0h1.2V317.192h-1.2V335Zm19.128-12.624a8.2,8.2,0,0,0-2.76.468,6.669,6.669,0,0,0-2.256,1.308l0.6,0.864a5.991,5.991,0,0,1,1.932-1.152,6.682,6.682,0,0,1,2.388-.432,3.847,3.847,0,0,1,2.772.912,3.528,3.528,0,0,1,.948,2.664v1.008h-4.3a5.361,5.361,0,0,0-3.564.972,3.4,3.4,0,0,0,.1,5.124,5.087,5.087,0,0,0,3.3.984,5.81,5.81,0,0,0,2.76-.612,4.168,4.168,0,0,0,1.752-1.716V335h1.152v-7.944a4.6,4.6,0,0,0-1.248-3.492,4.987,4.987,0,0,0-3.576-1.188h0Zm-0.672,11.736a4.1,4.1,0,0,1-2.568-.708,2.314,2.314,0,0,1-.912-1.932,2.251,2.251,0,0,1,.828-1.848,4.251,4.251,0,0,1,2.676-.672h4.272V331.3a4.378,4.378,0,0,1-1.644,2.088,4.711,4.711,0,0,1-2.652.72h0Zm25.368-11.736a5.867,5.867,0,0,0-3,.78,5.392,5.392,0,0,0-2.088,2.172v-8.136h-1.2V335h1.152v-2.952a5.462,5.462,0,0,0,2.1,2.244,5.837,5.837,0,0,0,3.036.8,6.235,6.235,0,0,0,3.168-.816,5.855,5.855,0,0,0,2.22-2.256,6.64,6.64,0,0,0,.8-3.288,6.708,6.708,0,0,0-.8-3.3,5.748,5.748,0,0,0-2.22-2.256,6.308,6.308,0,0,0-3.168-.8h0Zm-0.072,11.64a4.982,4.982,0,0,1-2.58-.672,4.818,4.818,0,0,1-1.8-1.872,6,6,0,0,1,0-5.472,4.818,4.818,0,0,1,1.8-1.872,4.982,4.982,0,0,1,2.58-.672,5.048,5.048,0,0,1,2.592.672A4.806,4.806,0,0,1,564.657,326a6,6,0,0,1,0,5.472,4.806,4.806,0,0,1-1.812,1.872,5.048,5.048,0,0,1-2.592.672h0Zm23.519,1.08a6.342,6.342,0,0,0,3.2-.816,5.878,5.878,0,0,0,2.244-2.268,6.984,6.984,0,0,0,0-6.552,5.878,5.878,0,0,0-2.244-2.268,6.7,6.7,0,0,0-6.408,0,5.878,5.878,0,0,0-2.244,2.268,6.984,6.984,0,0,0,0,6.552,5.878,5.878,0,0,0,2.244,2.268,6.342,6.342,0,0,0,3.2.816h0Zm0-1.08a4.984,4.984,0,0,1-2.58-.672,4.825,4.825,0,0,1-1.8-1.872,6,6,0,0,1,0-5.472,4.825,4.825,0,0,1,1.8-1.872,5.289,5.289,0,0,1,5.16,0,4.825,4.825,0,0,1,1.8,1.872,6,6,0,0,1,0,5.472,4.825,4.825,0,0,1-1.8,1.872,4.984,4.984,0,0,1-2.58.672h0Zm19.776-8.808v-2.736H602.4V335h1.2v-6.528a5.245,5.245,0,0,1,1.176-3.636,4.165,4.165,0,0,1,3.264-1.308l0.288,0.024v-1.176a5.7,5.7,0,0,0-2.976.732,4.335,4.335,0,0,0-1.8,2.1h0Zm20.952-2.832a8.2,8.2,0,0,0-2.76.468,6.669,6.669,0,0,0-2.256,1.308l0.6,0.864a5.991,5.991,0,0,1,1.932-1.152,6.682,6.682,0,0,1,2.388-.432,3.847,3.847,0,0,1,2.772.912,3.528,3.528,0,0,1,.948,2.664v1.008h-4.3a5.361,5.361,0,0,0-3.564.972,3.4,3.4,0,0,0,.1,5.124,5.087,5.087,0,0,0,3.3.984,5.81,5.81,0,0,0,2.76-.612,4.168,4.168,0,0,0,1.752-1.716V335h1.152v-7.944a4.6,4.6,0,0,0-1.248-3.492,4.987,4.987,0,0,0-3.576-1.188h0Zm-0.672,11.736a4.1,4.1,0,0,1-2.568-.708,2.314,2.314,0,0,1-.912-1.932,2.251,2.251,0,0,1,.828-1.848,4.251,4.251,0,0,1,2.676-.672h4.272V331.3a4.378,4.378,0,0,1-1.644,2.088,4.711,4.711,0,0,1-2.652.72h0Zm24.792-.744a2.785,2.785,0,0,1-1.944.7,2.254,2.254,0,0,1-1.74-.636,2.648,2.648,0,0,1-.588-1.86V323.5h3.984v-1.032h-3.984v-2.736h-1.2v2.736h-2.3V323.5h2.3v8.184a3.417,3.417,0,0,0,.888,2.508,3.382,3.382,0,0,0,2.52.9,4.486,4.486,0,0,0,1.428-.228,3.016,3.016,0,0,0,1.14-.66ZM661.1,335h1.2V322.472h-1.2V335Zm0.6-15.576a0.983,0.983,0,0,0,.984-0.984,0.909,0.909,0,0,0-.288-0.684,0.969,0.969,0,0,0-.7-0.276,0.983,0.983,0,0,0-.984.984,0.909,0.909,0,0,0,.288.684,0.969,0.969,0,0,0,.7.276h0ZM680.9,335.1a6.342,6.342,0,0,0,3.2-.816,5.878,5.878,0,0,0,2.244-2.268,6.984,6.984,0,0,0,0-6.552,5.878,5.878,0,0,0-2.244-2.268,6.7,6.7,0,0,0-6.408,0,5.878,5.878,0,0,0-2.244,2.268,6.984,6.984,0,0,0,0,6.552,5.878,5.878,0,0,0,2.244,2.268,6.342,6.342,0,0,0,3.2.816h0Zm0-1.08a4.984,4.984,0,0,1-2.58-.672,4.825,4.825,0,0,1-1.8-1.872,6,6,0,0,1,0-5.472,4.825,4.825,0,0,1,1.8-1.872,5.289,5.289,0,0,1,5.16,0,4.825,4.825,0,0,1,1.8,1.872,6,6,0,0,1,0,5.472,4.825,4.825,0,0,1-1.8,1.872,4.984,4.984,0,0,1-2.58.672h0Zm24.744-11.64a5.948,5.948,0,0,0-3.036.744,4.765,4.765,0,0,0-1.932,2.064v-2.712h-1.152V335h1.2v-6.672A4.9,4.9,0,0,1,702,324.776a4.6,4.6,0,0,1,3.48-1.32,3.964,3.964,0,0,1,2.988,1.1,4.45,4.45,0,0,1,1.068,3.216V335h1.2v-7.32a5.328,5.328,0,0,0-1.368-3.936,5.027,5.027,0,0,0-3.72-1.368h0Zm18.527,12.72a0.968,0.968,0,0,0,.708-0.3,1,1,0,0,0,.3-0.732,0.957,0.957,0,0,0-.3-0.72,1.014,1.014,0,0,0-1.416,0,0.957,0.957,0,0,0-.3.72,1,1,0,0,0,.3.732,0.968,0.968,0,0,0,.708.3h0Zm16.441-.1h1.224V319.3h6.048v-1.1h-13.32v1.1h6.048V335Zm19.367-9.792v-2.736h-1.151V335h1.2v-6.528a5.245,5.245,0,0,1,1.176-3.636,4.165,4.165,0,0,1,3.264-1.308l0.288,0.024v-1.176a5.7,5.7,0,0,0-2.976.732,4.34,4.34,0,0,0-1.8,2.1h0Zm26.712-2.736v6.672a4.988,4.988,0,0,1-1.236,3.552,4.365,4.365,0,0,1-3.348,1.32,4.07,4.07,0,0,1-3.048-1.1,4.415,4.415,0,0,1-1.08-3.216v-7.224h-1.2v7.32a4.8,4.8,0,0,0,5.232,5.3,5.505,5.505,0,0,0,2.88-.732,4.647,4.647,0,0,0,1.848-2.052V335h1.152V322.472h-1.2Zm18.1,12.624a6.149,6.149,0,0,0,3.648-.936,2.93,2.93,0,0,0,1.3-2.5,2.61,2.61,0,0,0-.624-1.848,3.593,3.593,0,0,0-1.524-.972,17.6,17.6,0,0,0-2.364-.564q-1.32-.264-2.052-0.492a3.172,3.172,0,0,1-1.236-.7,1.7,1.7,0,0,1-.5-1.308,2.013,2.013,0,0,1,.888-1.7,4.461,4.461,0,0,1,2.64-.648,7.14,7.14,0,0,1,2.016.288,5.734,5.734,0,0,1,1.752.84l0.552-.96a5.946,5.946,0,0,0-1.92-.888,8.609,8.609,0,0,0-2.376-.336,5.574,5.574,0,0,0-3.516.972,3,3,0,0,0-1.236,2.46,2.708,2.708,0,0,0,.648,1.92,3.761,3.761,0,0,0,1.56,1.008,16.634,16.634,0,0,0,2.4.576q1.272,0.24,1.992.456a3.034,3.034,0,0,1,1.212.672,1.618,1.618,0,0,1,.492,1.248,1.988,1.988,0,0,1-.9,1.728,4.97,4.97,0,0,1-2.8.624,7.485,7.485,0,0,1-2.532-.432,6.348,6.348,0,0,1-1.98-1.08l-0.552.96a5.956,5.956,0,0,0,2.136,1.152,9.047,9.047,0,0,0,2.88.456h0Zm22.656-1.728a2.785,2.785,0,0,1-1.944.7,2.254,2.254,0,0,1-1.74-.636,2.648,2.648,0,0,1-.588-1.86V323.5h3.984v-1.032h-3.984v-2.736h-1.2v2.736h-2.3V323.5h2.3v8.184a3.417,3.417,0,0,0,.888,2.508,3.382,3.382,0,0,0,2.52.9,4.486,4.486,0,0,0,1.428-.228,3.016,3.016,0,0,0,1.14-.66ZM194.04,295.6a32.507,32.507,0,0,0,14.52-3.18,24.13,24.13,0,0,0,10.2-9.3l-6.36-4.32a19.454,19.454,0,0,1-7.92,6.96,24.011,24.011,0,0,1-10.44,2.28,24.719,24.719,0,0,1-12.3-3.06,21.594,21.594,0,0,1-8.52-8.64,28.595,28.595,0,0,1,0-25.74,21.5,21.5,0,0,1,8.52-8.7,24.719,24.719,0,0,1,12.3-3.06,23.509,23.509,0,0,1,10.44,2.34,19.912,19.912,0,0,1,7.92,7.02l6.36-4.32a24.23,24.23,0,0,0-10.14-9.3,32.434,32.434,0,0,0-14.58-3.18,34.026,34.026,0,0,0-16.74,4.08,29.657,29.657,0,0,0-11.58,11.4,34.865,34.865,0,0,0,0,33.18,29.521,29.521,0,0,0,11.58,11.46,34,34,0,0,0,16.74,4.08h0Zm46.2-.6h8.52V231.88h-8.52V295Zm4.32-76.92a6.148,6.148,0,0,0,6.24-6.24,5.566,5.566,0,0,0-1.8-4.14,6.149,6.149,0,0,0-4.44-1.74,6.031,6.031,0,0,0-4.44,1.8,5.758,5.758,0,0,0-1.8,4.2,5.892,5.892,0,0,0,1.8,4.32,6.031,6.031,0,0,0,4.44,1.8h0Zm40.919,26.16V231.88h-8.16V295h8.52V262.84q0-11.038,5.64-17.16t15.6-6.12l2.04,0.12V231.4q-8.76,0-14.7,3.24a20.646,20.646,0,0,0-8.94,9.6h0ZM378.117,295h10.44l-29.52-37.32,27-25.8h-10.56L337.8,266.32V205.96h-8.52V295h8.52V277l14.88-13.68Zm28.08,0h8.52V205.96H406.2V295Zm92.159-31.56a34.148,34.148,0,0,0-3.96-16.62,28.943,28.943,0,0,0-10.92-11.34,30.512,30.512,0,0,0-15.72-4.08,30.833,30.833,0,0,0-15.78,4.08,29.122,29.122,0,0,0-11.04,11.4,33.822,33.822,0,0,0-4.02,16.56,32.657,32.657,0,0,0,4.2,16.56,29.841,29.841,0,0,0,11.7,11.46,35.04,35.04,0,0,0,17.22,4.14,35.494,35.494,0,0,0,13.86-2.64,27.026,27.026,0,0,0,10.5-7.68l-4.8-5.52a23.568,23.568,0,0,1-8.52,6.18,27.218,27.218,0,0,1-10.8,2.1q-10.44,0-17.28-6.06a22.555,22.555,0,0,1-7.56-15.9h52.8Zm-30.6-24.72a21.624,21.624,0,0,1,15.42,5.82,22.861,22.861,0,0,1,7.02,15.18h-44.76a22.852,22.852,0,0,1,7.02-15.18,21.467,21.467,0,0,1,15.3-5.82h0ZM543.4,295.3q9.4,0,14.3-3.65a11.553,11.553,0,0,0,4.9-9.75,10.289,10.289,0,0,0-2.5-7.35,14.581,14.581,0,0,0-6.1-3.85,82.031,82.031,0,0,0-9.7-2.4,70.351,70.351,0,0,1-9-2.1,13.73,13.73,0,0,1-5.7-3.45,8.82,8.82,0,0,1-2.3-6.45,9.958,9.958,0,0,1,4.05-8.25q4.05-3.15,12.15-3.15a29.276,29.276,0,0,1,8.7,1.3,21.631,21.631,0,0,1,7.2,3.7l1.2-1.6a21.971,21.971,0,0,0-7.6-3.85,32.084,32.084,0,0,0-9.5-1.45q-9,0-13.65,3.85a11.83,11.83,0,0,0-4.65,9.45q0,4.9,2.55,7.65a14.809,14.809,0,0,0,6.3,4,73.178,73.178,0,0,0,9.85,2.35,79.764,79.764,0,0,1,8.95,2.15,13.52,13.52,0,0,1,5.5,3.3,8.31,8.31,0,0,1,2.25,6.15,9.861,9.861,0,0,1-4.2,8.45q-4.2,3.051-13,3.05a30.136,30.136,0,0,1-10.95-1.95,23.711,23.711,0,0,1-8.05-4.85l-1.2,1.6a22.168,22.168,0,0,0,8.5,5.1,33.949,33.949,0,0,0,11.7,2h0Zm60.4-5.1a12.051,12.051,0,0,1-8.6,3.2q-5.2,0-7.9-2.9t-2.7-8.4V245.2h17.5v-1.9H584.6V232h-2v11.3h-10v1.9h10v37.4q0,5.8,3.25,9.25t9.25,3.45a17.177,17.177,0,0,0,5.65-.95,10.881,10.881,0,0,0,4.45-2.75ZM666,243.3v28.1q0,9.9-5.6,15.95t-15.3,6.05q-9.1,0-14.1-5.05t-5-14.55V243.3h-2v30.5q0,10.4,5.6,15.95t15.6,5.55a22.614,22.614,0,0,0,13.1-3.7,20.12,20.12,0,0,0,7.7-10.3V295h2V243.3h-2Zm71.1-22.5V259a23.422,23.422,0,0,0-8.85-11.65A24.341,24.341,0,0,0,714,243a24.866,24.866,0,0,0-12.75,3.35,24.033,24.033,0,0,0-9.05,9.3,27.26,27.26,0,0,0-3.3,13.45,27.543,27.543,0,0,0,3.3,13.5,23.93,23.93,0,0,0,9.05,9.35A24.856,24.856,0,0,0,714,295.3a24.279,24.279,0,0,0,14.3-4.35,23.473,23.473,0,0,0,8.8-11.75V295h2V220.8h-2ZM714,293.4a22.931,22.931,0,0,1-11.8-3.1,21.815,21.815,0,0,1-8.3-8.65,27.75,27.75,0,0,1,0-25.1,21.478,21.478,0,0,1,8.3-8.6,24.351,24.351,0,0,1,23.6,0,21.492,21.492,0,0,1,8.3,8.6,27.75,27.75,0,0,1,0,25.1,21.829,21.829,0,0,1-8.3,8.65,22.939,22.939,0,0,1-11.8,3.1h0Zm52.1,1.6h2V243.3h-2V295Zm1-66a2.744,2.744,0,0,0,2.6-2.6,2.437,2.437,0,0,0-.8-1.85,2.57,2.57,0,0,0-1.8-.75,2.562,2.562,0,0,0-2.6,2.6,2.565,2.565,0,0,0,.75,1.8,2.431,2.431,0,0,0,1.85.8h0Zm47,66.3a25.053,25.053,0,0,0,12.85-3.35,23.6,23.6,0,0,0,9-9.35,27.9,27.9,0,0,0,3.25-13.5,27.613,27.613,0,0,0-3.25-13.45,23.7,23.7,0,0,0-9-9.3,26.32,26.32,0,0,0-25.7,0,23.669,23.669,0,0,0-9,9.3A27.591,27.591,0,0,0,789,269.1a27.878,27.878,0,0,0,3.25,13.5,23.571,23.571,0,0,0,9,9.35,25.043,25.043,0,0,0,12.85,3.35h0Zm0-1.9a22.931,22.931,0,0,1-11.8-3.1,21.815,21.815,0,0,1-8.3-8.65,27.75,27.75,0,0,1,0-25.1,21.478,21.478,0,0,1,8.3-8.6,24.351,24.351,0,0,1,23.6,0,21.492,21.492,0,0,1,8.3,8.6,27.75,27.75,0,0,1,0,25.1,21.829,21.829,0,0,1-8.3,8.65,22.941,22.941,0,0,1-11.8,3.1h0Z" transform="translate(-161.531 -205.969)"></path>
                                    </svg>
                                </Link>
                            </div>

                            <div className="menu" onClick={this.handleToggle}>
                                <ul>

                                    <li>
                                        <a href="javascript" className="roll-hover-btn">
                                            <span className="roll-hover-label">MENU</span>
                                            <span className="roll-hover-label roll-hover-label-active">MENU</span>
                                        </a>
                                    </li>
                                    <li className="menu-btn">
                                        <div className="menu-toggle">
                                            <div className="menu-btn-line">
                                                <div className="menu-btn-inner-line"></div>
                                                <div className="menu-btn-inner-line"></div>
                                            </div>
                                            <div className="menu-btn-line">
                                                <div className="menu-btn-inner-line"></div>
                                                <div className="menu-btn-inner-line"></div>
                                            </div>
                                            <div className="menu-btn-line">
                                                <div className="menu-btn-inner-line"></div>
                                                <div className="menu-btn-inner-line"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <span className="close-menu" onClick={this.handleToggle}><img src={remove} /></span>
                        <div className="cm_menu_bg">
                            <div className="cm_menu__bgStrips">
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                                <div className="bgStrips__strip">
                                    <div className="bgStrips__bg"></div>
                                </div>
                            </div>
                            <div className="menu__bgLines">
                                <div className="bgLines__line"></div>
                                <div className="bgLines__line"></div>
                                <div className="bgLines__line"></div>
                                <div className="bgLines__line"></div>
                                <div className="bgLines__line"></div>
                                <div className="bgLines__line"></div>
                            </div>
                        </div>
                        <div className="cm_tg_menu_main" >
                            <div className="cm_menu_text">
                                <div className="cm_menu_content">
                                    <svg viewBox="0 0 2500 2000">
                                        {/* <!-- Symbol with text --> */}
                                        <symbol id="s-text">
                                            <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="text--line">
                                                MENU
                                </text>
                                        </symbol>
                                        {/* <!-- Clippath  with text --> */}
                                        <clipPath id="cp-text">
                                            <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="text--line">
                                                MENU
                                </text>
                                        </clipPath>
                                        {/* <!-- Group for shadow --> */}
                                        <g clipPath="url(#cp-text)" className="shadow">
                                            <rect width="100%" height="100%" className="anim-shape anim-shape--shadow"></rect>
                                        </g>
                                        {/* <!-- Group with clippath for text--> */}
                                        <g clipPath="url(#cp-text)" className="colortext">
                                            {/* <!-- Animated shapes inside text --> */}
                                            <rect width="100%" height="100%" className="anim-shape"></rect>
                                            <rect width="80%" height="100%" className="anim-shape"></rect>
                                            <rect width="60%" height="100%" className="anim-shape"></rect>
                                            <rect width="40%" height="100%" className="anim-shape"></rect>
                                            <rect width="20%" height="100%" className="anim-shape"></rect>
                                        </g>
                                        {/* <!-- Transparent copy of text to keep patterned text selectable --> */}
                                        <use xlink href="#s-text" className="text--transparent"></use>
                                    </svg>
                                </div>
                            </div>
                            <div className="cm_menu_item" onClick={refreshPage}>
                                <ul id="myMenu" onClick={this.handleToggle}>
                                    <li>

                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                00
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label" data-menuanchor="firstPage">

                                                <NavLink to="/#0" className="btn signIn-btn">
                                                    Home
                                            </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                01
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label" >
                                                <NavLink to="/Company" className="btn signIn-btn">
                                                    Company
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                02
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label" data-menuanchor="thirdPage">

                                                <NavLink to="/#2" className="btn signIn-btn">
                                                    Sevices
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                03
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label">
                                                <NavLink to="/Portfolio" >
                                                    Portfolio
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                04
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label" >

                                                <NavLink to="/#4" >
                                                    Clients
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="cm_item_inner">
                                            <div className="m_number">
                                                05
                                </div>
                                            <div className="m_line"></div>
                                            <div className="m_label">
                                                <NavLink to="/Contectus" >
                                                    Contact
                                                </NavLink>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <HeaderContent></HeaderContent> */}

            </div >
        );
    }
}

export default Header;