import React, { Component } from 'react';
import './ourclient.css';
import c1 from '../../../images/client/x-vida.png';
import c2 from '../../../images/client/trupawsco.png';
import c3 from '../../../images/client/tenzo.png';
import c4 from '../../../images/client/tapia.png';
import c5 from '../../../images/client/portavie.png';
import c6 from '../../../images/client/orthofeet.png';
import c7 from '../../../images/client/modalsmoothskin.png';
import c8 from '../../../images/client/TG.png';
import c9 from '../../../images/client/black-logo_150x.png';
import c10 from '../../../images/client/the-date-room.png';
import c11 from '../../../images/client/Ezyvision.png';
import c12 from '../../../images/client/rock-the-job.png';


const data = [
    {
        id: 1,
        link: 'https://www.xvida.com/',
        img: c1
    },
    {
        id: 2,
        link: 'https://www.trupawsco.com/',
        img: c2
    },
    {
        id: 3,
        link: 'https://tenzotea.co/',
        img: c3
    },
    {
        id: 4,
        link: 'http://www.tapiabrothers.com/',
        img: c4
    },
    {
        id: 5,
        link: 'https://porteavie.com/',
        img: c5
    },
    {
        id: 6,
        link: 'https://www.orthofeet.com/',
        img: c6
    },
    {
        id: 7,
        link: 'https://modelsmoothskin.com/',
        img: c7
    },
    {
        id: 8,
        link: 'https://tastegreece.co.nz/',
        img: c8
    },
    {
        id: 9,
        link: 'https://fortressofinca.com/',
        img: c9
    },
    {
        id: 10,
        link: 'https://www.thedateroom.com/',
        img: c10
    },
    {
        id: 11,
        link: 'https://ezyvision.co.nz/',
        img: c11
    },
    {
        id: 12,
        link: 'https://rockthatjob.com/',
        img: c12
    },
];


class ourclient extends Component {
    state = {
        data: []
      };
      componentDidMount() {
        console.log(data);
        this.setState({ data });
      }
    render() {
        const { data } = this.state;
        const ourclients = data.map(dataIn => {
            return (
                 <div className="cl-logo-wrapper">
                        <a href={dataIn.link} target="_blank" rel="noopener noreferrer">
                            <img src={dataIn.img} alt="Client Logo" />
                        </a>
                 </div>
            );
          });
        return (
            <>
                <div className="v-lines cm_line_bg">
                    <div className="v-lines-one"></div>
                    <div className="v-lines-two"></div>
                    <div className="v-lines-three"></div>
                    <div className="v-lines-four"></div>
                    <div className="v-lines-five"></div>
                </div>
                <div className="our-clients-vtext">
                    <p> We offer what you need. There are many ideas, but one solution is the most effective.</p>
                </div>
                <div className="inner_content_wrap">
                    <div className="cm-clients-wrapper">
                        <div className="cm-title-main">
                            <span>our clients</span>
                            <h2>
                                <span>We are trusted,</span>
                                <span>We are known,</span>
                                <span>We are valued</span>
                            </h2>
                        </div>
                        <div className="cm-clients-logo">

                             {ourclients}
                           
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ourclient;