import React, { Component,lazy, Suspense  } from 'react';
import './startchatcomponent/startchat.css';


const Firstsection = React.lazy(() => import('./websitedev/Firstsection/firstsection'));
const Expertise = React.lazy(() => import('./websitedev/Expertise/Expertise'));
const Advantages = React.lazy(() => import('./websitedev/advantage/advantage'));
const Casestudy = React.lazy(() => import('./websitedev/CaseStudies/CaseStudies'));
const WebTechnologies = React.lazy(() => import('./websitedev/WebTechnologies/WebTechnologies'));
const Trusted = React.lazy(() => import('./websitedev/Trusted/Trusted'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));

class webdevcomponent extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Firstsection />
                <Expertise />
                <Advantages />
                <Casestudy />
                <WebTechnologies />
                <Trusted />
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}
export default webdevcomponent;