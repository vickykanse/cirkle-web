import React, { Component,lazy, Suspense  } from 'react';
import './startchatcomponent/startchat.css';

import img1 from '../images/group/2.jpg';
import img2 from '../images/group/8.jpg';
import img3 from '../images/group/1.jpeg';
import img4 from '../images/group/7.jpg';
import img5 from '../images/group/4.jpg';

const Firstsection = React.lazy(() => import('./careercomponent/firstsection/firstsection'));
const Vacancy = React.lazy(() => import('./careercomponent/Vacancy/vacancy'));
const Hireprocess = React.lazy(() => import('./careercomponent/Hiringprocess/Hiringprocess'));
const Oursocialbenifits = React.lazy(() => import('./careercomponent/oursocialbenefits/oursocialbenefits'));
const Perks = React.lazy(() => import('./careercomponent/Perks/Perks'));
const Whyus = React.lazy(() => import('./careercomponent/whyus/whyus'));
const Companylife = React.lazy(() => import('../Components/companypagecomponent/companylife/companylife'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));

class career extends Component {
    render() {
        const vacancy = [
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
            {
                title: ' Business Development Manager',
                subtitle: 'Django Stars is looking for an experienced Business Development Manager.'
            },
        ]
        return (
            <>
             <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Firstsection></Firstsection>
                <Vacancy
                    title="OUR VACANCIES"
                    subtitle="We Have Challenging Projects For Gifted Professionals. Let’s Create Great Products Together!"
                    vacancybox={vacancy}
                ></Vacancy>
                <Hireprocess></Hireprocess>
                <Oursocialbenifits></Oursocialbenifits>
                <Perks></Perks>
                <Whyus></Whyus>
                <Companylife image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}></Companylife>
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
            </Suspense>
               

            </>
        );
    }
}

export default career;