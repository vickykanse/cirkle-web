import React, { Component,lazy, Suspense } from 'react';
import './startchatcomponent/startchat.css';

const Firstsection = React.lazy(() => import('./uiuxcomponent/firstsection/firstsection'));
const Whatwedo = React.lazy(() => import('./uiuxcomponent/whatwedo/whatwedo'));
const Uiuxdiff = React.lazy(() => import('./uiuxcomponent/uianduxdiff/uianduxdiff'));
const Stageofdesign = React.lazy(() => import('./uiuxcomponent/stageofdesign/stageofdesign'));
const Prjectprocess = React.lazy(() => import('./uiuxcomponent/projectprocess/projectprocess'));
const Designtools = React.lazy(() => import('./uiuxcomponent/Designtools/Designtools'));
const Exwork = React.lazy(() => import('./uiuxcomponent/exwork/exwork'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));


class uiuxcomponent extends Component {
  

    render() {
        return (
            <>
               <Suspense fallback={<><div id="overlay"></div><span className="loader"><span className="loader-inner"></span></span></>}>
                    <Startchat></Startchat>
                        <Firstsection />
                        <Whatwedo />
                        <Uiuxdiff />
                        <Stageofdesign />
                        <Prjectprocess />
                        <Designtools />
                        <Exwork />
                        <footer className="section footer-main active inner-page-footer">
                            <Footer></Footer>
                        </footer>
                </Suspense>
               
            </>
        );
    }
}

export default uiuxcomponent;