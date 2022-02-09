import React, { Component,lazy, Suspense  }  from 'react';
import "./qatesting/qatesting.css";
import './startchatcomponent/startchat.css';

const Firstsection = React.lazy(() => import('./qatesting/Firstsection/firstsection'));
const Testingprocess = React.lazy(() => import('./qatesting/testingprocess/testingprocess'));
const Whatwetest = React.lazy(() => import('./qatesting/whatwetest/whatwetest'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));

class qatestingcomponents extends Component {
    render() {
        return (
            <>
                
                <Suspense fallback={<><div id="overlay"></div><span className="loader"><span className="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Firstsection />
                <Testingprocess />
                <Whatwetest />
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}

export default qatestingcomponents;