import React, { Component, lazy, Suspense } from 'react';
import './startchatcomponent/startchat.css';
import img1 from '../images/company/img1.original.jpg';
import img2 from '../images/company/img2.original.jpg';
import img3 from '../images/company/img3.original.jpg';
import img4 from '../images/company/img4.original.jpg';
import img5 from '../images/company/img5.original.jpg';


const Firstsection = React.lazy(() => import('../Components/companypagecomponent/firstsection/firstsection'));
const AboutCompany = React.lazy(() => import('../Components/companypagecomponent/aboutcompany/aboutcompany'));
const Howitworks = React.lazy(() => import('../Components/companypagecomponent/howitworks/howitworks'));
const Ourvisionmission = React.lazy(() => import('../Components/companypagecomponent/ourvisionmission/ourvisionmission'));
const Ourvalue = React.lazy(() => import('../Components/companypagecomponent/ourvalue/ourvalue'));
const Ourresult = React.lazy(() => import('../Components/companypagecomponent/ourresult/ourresult'));
const Companylife = React.lazy(() => import('../Components/companypagecomponent/companylife/companylife'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));


class companypagecomponents extends Component {

    render() {

        return (
            <>
                
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat/>
                <Firstsection></Firstsection>
                <AboutCompany></AboutCompany>
                <Howitworks></Howitworks>
                <Ourvisionmission></Ourvisionmission>
                <Ourvalue></Ourvalue>
                <Ourresult></Ourresult>
                <Companylife image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}></Companylife>
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>

            </>
        );
    }
}

export default companypagecomponents;