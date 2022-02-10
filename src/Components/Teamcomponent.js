import React, { Component, lazy, Suspense } from 'react';
import '../Components/Teamcomponent/team.css'
import './startchatcomponent/startchat.css';


import img1 from '../images/group/2.jpg';
import img2 from '../images/group/8.jpg';
import img3 from '../images/group/1.jpeg';
import img4 from '../images/group/7.jpg';
import img5 from '../images/group/4.jpg';

const Firstsection = React.lazy(() => import('./Teamcomponent/firstsection/firstsection'));
const Crew = React.lazy(() => import('./Teamcomponent/Crew/crew'));
const Goal = React.lazy(() => import('./Teamcomponent/goal/goal'));
const Vacancy = React.lazy(() => import('../Components/careercomponent/Vacancy/vacancy'));
const Approch = React.lazy(() => import('./Teamcomponent/Approach/Approach'));
const Environment = React.lazy(() => import('./Teamcomponent/Environment/Environment'));
const Companylife = React.lazy(() => import('../Components/companypagecomponent/companylife/companylife'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));



class Teamcomponent extends Component {

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
        ]
        return (
            <>

                 <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                        <Startchat></Startchat>
                        <Firstsection />
                        <Crew />
                        <Goal />
                        <Vacancy
                            className="team-vacancies"
                            title="HIRING"
                            subtitle="Do What You Love – With Us!"
                            vacancybox={vacancy}
                        >
                            <div className="big-letter-career">
                                <div className="center-botton">
                                    <a href="career.html" className="btn btn_submit" type="submit">
                                        <div className="cm_btn_hover">
                                            <span>All Jobs</span>
                                        </div>
                                    </a>
                                </div>
                                <h5>Careers</h5>
                            </div>
                        </Vacancy>
                        <Approch />
                        <Environment />
                        <Companylife image1={img1} image2={img2} image3={img3} image4={img4} image5={img5}></Companylife>
                        <footer className="section footer-main active inner-page-footer">
                            <Footer></Footer>
                        </footer>
                </Suspense>
               
            </>
        );
    }
}

export default Teamcomponent;