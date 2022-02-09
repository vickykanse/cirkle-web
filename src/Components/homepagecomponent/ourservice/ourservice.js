import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ourservice.css';


const data = [
    {
        id: '01',
        link: '/Uiux',
      heading: "DESIGN",
      bgicon: "flaticon-ux serve-icon",
      categorys: [
        {
          id: 1,
          link: "/Uiux",
          category: "UI/UX",
        }
      ]
    },
    {
        id: '02',
        link: '/WebsiteDevlopment',
      heading: "WEBSITE DEVELOPMENT",
      bgicon: "flaticon-www serve-icon",
      categorys: [
        {
          id: 1,
          link: "/WebsiteDevlopment",
          category: "eCommerce Store",
        },
        {
            id: 2,
            link: "/WebsiteDevlopment",
            category: "Landing Page Website",
        },
        {
            id: 3,
            link: "/WebsiteDevlopment",
            category: "Content Management System",
        },
        {
            id: 4,
            link: "/WebsiteDevlopment",
            category: "Enterprise Solutions",
        }
      ]
    },
    {
        id: '03',
        link: '/Appdevlopment',
      heading: "MOBILE APP DEVELOPMENT",
      bgicon: "flaticon-app-development serve-icon",
      categorys: [
        {
          id: 1,
          link: "/Appdevlopment",
          category: "iOS",
        },
        {
            id: 1,
            link: "/Appdevlopment",
            category: "Android",
          }
      ]
    },
    {
        id: '04',
        link: '/Qatesting',
      heading: "TESTING",
      bgicon: "flaticon-test serve-icon",
      categorys: [
        {
          id: 1,
          link: "/Qatesting",
          category: "QA Test",
        }
      ]
    },
  ];
class ourservice extends Component {
    state = {
        data: []
      };
      componentDidMount() {
        console.log(data);
        this.setState({ data });
      }
    render() {
        const { data } = this.state;
        const ourservicedata = data.map(dataIn => {
          return (
             <div className="service-section-part">
                <div className="cm_sc_parts">
                    <h6 className="cm_service_number"><span>{dataIn.id}</span></h6>
                    <div className="cm_service_name">
                        <NavLink to={dataIn.link}> {dataIn.heading}</NavLink>
                    </div>
                    
                    <ul className="cm_services_provided">
                    {dataIn.categorys.map(cat => (
                        <li>
                            <NavLink to={cat.link} >
                             {cat.category}
                                </NavLink>
                        </li>
                         ))}
                    </ul>
                </div>
                <div className="cm_service_bg">
                    <i className={dataIn.bgicon}></i>
                </div>
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
                </div>
                <div className="inner_content_wrap">
                    <div className="cm_gib-title">
                        <h3 className="cm_service_title">
                            <span>O</span><span>u</span><span>r</span>&nbsp;
                        <span>S</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
                        </h3>
                        <div className="cm_service_marquee">
                            <div className="scroll-text2"> 
                                <span><marquee>Our Services</marquee></span>
                            </div>
                        </div>
                    </div>
                    <div className="cm_sub_title">
                        <h6><span>Fields lead by <b>EXPERIENCE</b></span></h6>
                    </div>
                    <div className="our-service-inner row">

                         {<React.Fragment>{ourservicedata}</React.Fragment>}
                      
                       
                    </div>
                </div>
            </>
        );
    }
}

export default ourservice;