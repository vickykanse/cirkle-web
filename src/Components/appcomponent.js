import React, { Component,lazy, Suspense  } from 'react';
import './startchatcomponent/startchat.css';

const Mainsection = React.lazy(() => import('../Components/Appdevelopment/mainsection/firstsection'));
const Ourservice = React.lazy(() => import('../Components/Appdevelopment/ourservices/ourservices'));
const Iosservice = React.lazy(() => import('../Components/Appdevelopment/iosservice/iosservice'));
const Androidservice = React.lazy(() => import('../Components/Appdevelopment/androidservice/androidservice'));
const Appbuild = React.lazy(() => import('../Components/Appdevelopment/appbuild/appbuild'));
const Appdevelopment = React.lazy(() => import('../Components/Appdevelopment/appdevlopment/appdevlopment'));
const Portflio = React.lazy(() => import('../Components/Appdevelopment/portfolio/portfolio'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));

class appcomponent extends Component {
    render() {
        return (
            <>
               
                <Suspense fallback={<><div id="overlay"></div><span className="loader"><span className="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Mainsection></Mainsection>
                <Ourservice></Ourservice>
                <Iosservice></Iosservice>
                <Androidservice></Androidservice>
                <Appbuild></Appbuild>
                <Appdevelopment></Appdevelopment>
                <Portflio></Portflio>
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}

export default appcomponent;