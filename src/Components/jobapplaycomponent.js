import React, { Component, lazy, Suspense } from 'react';
import "./jobapplaycomponent/jobapplay.css";
import './startchatcomponent/startchat.css';

const Firstsection = React.lazy(() => import('./jobapplaycomponent/firstsection/firstsection'));
const Fromsection = React.lazy(() => import('./jobapplaycomponent/formsection/jobformsection'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));

class jobapplaycomponent extends Component {
    render() {
        return (
            <>
               
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Firstsection />
                <Fromsection />
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}

export default jobapplaycomponent;