import React, { Component,lazy, Suspense  } from 'react';
import './startchatcomponent/startchat.css';

import Usa from '../images/testimonial/usa.svg';
import Canada from '../images/testimonial/canada.svg'
import Profile from '../images/testimonial/Roma_G_final.jpg'
import London from '../images/testimonial/london.svg'

const Firstsection = React.lazy(() => import('./Testimonialcomponent/firstsection/firstsection'));
const Filterblock = React.lazy(() => import('./Testimonialcomponent/testimonialfilter/testimonialblock'));
const Startchat = React.lazy(() => import('./startchatcomponent'));
const Footer = React.lazy(() => import('../Components/footer/footer'));


class testimonialcomponent extends Component {
    render() {
        const folders = {
            directories: [
                {
                        
                            type: 'dir',
                            name: 'USA',
                            subtitle: 'A Fast-Growing Startup Center With Promising Ideas And Encouraging Opportunities For Us.',
                            flag: Usa,
                            children: [
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: 'Tee Lam',
                                    designation: 'Marketing Director ',
                                    highlighted: 'Dog Vitamin',
                                    location: ' United States',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 5,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Steve Lu',
                                    designation: 'Designer/Art Director',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Los Angeles, California',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 3,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Evan Streusand',
                                    designation: 'Founder',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Austin, Texas',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 4,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Steve Lu',
                                    designation: 'Designer/Art Director',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Los Angeles, California',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 3,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Evan Streusand',
                                    designation: 'Founder',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Austin, Texas',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 4,
                                },
                            ]
                        },
                        {
                            type: 'dir',
                            name: 'Canada',
                            subtitle: 'A Fast-Growing Startup Center With Promising Ideas And Encouraging Opportunities For Us.',
                            flag: Canada,
                            children: [
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: 'Tee Lam',
                                    designation: 'Marketing Director ',
                                    highlighted: 'Dog Vitamin',
                                    location: ' United States',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 5,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Steve Lu',
                                    designation: 'Designer/Art Director',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Los Angeles, California',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 3,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Evan Streusand',
                                    designation: 'Founder',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Austin, Texas',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 4,
                                },
                            ]
                        },
                        {
                            type: 'dir',
                            name: 'London',
                            subtitle: 'A Fast-Growing Startup Center With Promising Ideas And Encouraging Opportunities For Us.',
                            flag: London,
                            children: [
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: 'Tee Lam',
                                    designation: 'Marketing Director ',
                                    highlighted: 'Dog Vitamin',
                                    location: ' United States',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 5,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Steve Lu',
                                    designation: 'Designer/Art Director',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Los Angeles, California',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 3,
                                },
                                {
                                    type: 'file',
                                    profileimg: Profile,
                                    name: ' Evan Streusand',
                                    designation: 'Founder',
                                    highlighted: 'Dog Vitamin',
                                    location: 'Austin, Texas',
                                    feedback: 'They did an excellent job of executing our vision onto the site.',
                                    star: 4,
                                },
                            ]
                        }
            ]
        };
        return (
            <> 
               
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat/>
                <Firstsection />
                <Filterblock data={folders.directories}/>
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}
export default testimonialcomponent;