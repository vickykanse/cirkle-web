import React, {Component} from 'react';
import {useParams} from "react-router-dom"
import careerdata from "../../careercomponent/careerdata/careerdata"
import Background from '../../../images/group/5.jpg';

class firstsection extends Component {
   
    render() {
        const {careerId} = useParams()
        const thisCareer = careerdata.find(career => career.id === careerId)
        return (
            <section className="inner-page-title">
            <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
            <div className="header__text">
                <div className="header__text-inner text-center">
                    <h2>{thisCareer.name}</h2>
                    <div className="tagline-inner"> Surat  -  India   </div>
                </div>
            </div>
        </section>
        );
    }
}
export default firstsection;

// function firstsection() {
   
//     const {careerId} = useParams()
//     const thisCareer = careerdata.find(career => career.id === careerId)
//     return (
//          <section className="inner-page-title">
//                 <div className="section-bg" style={{ backgroundImage: `url(${Background})` }}></div>
//                 <div className="header__text">
//                     <div className="header__text-inner text-center">
//                         <h2>{thisCareer.name}</h2>
//                         <div className="tagline-inner"> Surat  -  India   </div>
//                     </div>
//                 </div>
//          </section>   
//     ) 
// }
// export default firstsection;