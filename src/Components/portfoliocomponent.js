import React, { Component,lazy, Suspense  } from 'react';
import './portfolio/portfolio.css'
import logo from '../images/portfoliyo/santander-bp-logo.png'
// import c from './portfolio/Findus/Findus'
import './startchatcomponent/startchat.css';
import Port from '../images/portfoliyo/pot-image.png'
import aboutback from '../images/portfoliyo/about_back_image-old.png'

const Firstsection = React.lazy(() => import('./portfolio/firstsection/firstsection'));
const Findus = React.lazy(() => import('./portfolio/Findus/Findus'));
const Footer = React.lazy(() => import('../Components/footer/footer'));
const Startchat = React.lazy(() => import('./startchatcomponent'));
const Portfolio = React.lazy(() => import('./portfolio/workprofile/profile'));

class portfoliocomponent extends Component {
   
    state = {
        post: [
            { 
                id: 1, 
                cardimg: aboutback,
                name: "abc",
                logo: 'images/portfoliyo/santander-bp-logo.png',
                description: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.`,
                projects: [
                    {
                      id: 1,
                      imgs: Port,
                    },
                    {
                        id: 2,
                        imgs: Port,
                      },
                      {
                        id: 3,
                        imgs: Port,
                      },
                      {
                          id: 4,
                          imgs: Port,
                        },
                  ],
             },
            { 
                id: 2, 
                cardimg: aboutback,
                name: "def",
                logo: logo,
                description: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.`,
                projects: [
                    {
                      id: 0,
                      imgs: Port,
                    },
                    {
                        id: 1,
                        imgs: Port,
                      },
                  ],
            },
            { 
                id: 3, 
                cardimg: aboutback,
                name: "ghi",
                logo: logo,
                description: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.`,
                projects: [
                    {
                      id: 0,
                      imgs: Port,
                    },
                    {
                        id: 2,
                        imgs: Port,
                      },
                  ],
             },
             { 
                id: 4, 
                cardimg: aboutback,
                name: "jkl",
                logo: logo,
                description: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.`,
                projects: [
                    {
                      id: 0,
                      imgs: Port,
                    },
                    {
                        id: 2,
                        imgs: Port,
                      },
                  ],
             }
          ],
        isOpen: false
    }
    

    render() {
       
        return (
            <>
               
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Startchat></Startchat>
                <Firstsection />
                <Portfolio data={this.state.post}/>
                <Findus />
                <footer className="section footer-main active inner-page-footer">
                    <Footer></Footer>
                </footer>
                </Suspense>
            </>
        );
    }
}

export default portfoliocomponent;