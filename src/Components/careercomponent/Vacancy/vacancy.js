import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './vacancy.css'
import { NavLink, Link } from 'react-router-dom';
import fire from '../../../images/career/fire.svg'
class vacancy extends Component {
    static propTypes = {
        vacancybox: PropTypes.array.isRequired,
    };
    static defaultProps = {
        vacancybox: [],
    };
    constructor(props) {
        super(props);
        this.state = {
            typevacancy: null,
        };
    }
    renderDatasocial = (item, index) => {
        const { title, subtitle } = this.state.typesocial ? { title: item, subtitle: subtitle } : item;
        return (


            <div className="cm-career-list-col col-6">
                <NavLink to="/Jobapplay" className="cm-career-list-col-inner">
                    <h3><img src={fire} /> {title}</h3>
                    <p>{subtitle}</p>
                    <div className="cm-career-footer row no-gutters">
                        <div className="cm-address">
                            <p>
                                <svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml space="preserve" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m256 0c-107.52 0-195 87.48-195 195 0 42.55 13.44 82.98 38.9 116.9l144.08 194.05c0.36 0.47 0.91 0.65 1.31 1.07 7.2 7.71 17.59 5.77 22.72-1.07 41.49-55.36 117.54-158.75 146.78-197.75 0 0 0.01-0.03 0.02-0.05l0.18-0.24c23.56-33.1 36.01-72.14 36.01-112.91 0-107.52-87.48-195-195-195zm0 300.2c-57.89 0-105.2-47.31-105.2-105.2s47.31-105.2 105.2-105.2 105.2 47.31 105.2 105.2-47.31 105.2-105.2 105.2z"/>
                                </svg> Cirkle Studio
                                
                            </p>
                        </div>
                        <div className="cm-join-btn">
                            <p>Join Us <i className="fas fa-long-arrow-alt-right"></i></p>
                        </div>
                    </div>
                </NavLink>
            </div>
        )
    };
    render() {
        const { vacancybox } = this.props;
        return (
            <>
                <section className={'cm-vacancies-section ' + this.props.className} id="vacancy">
                    <div className="inner_content_wrap big-container">
                        <div className="row">
                            <div className="col-3">
                                <div className="cm-section-title anim-title">
                                    <div className="aos" data-aos="fade-right">
                                        <span className="styled-span">{this.props.title}</span>
                                        <h2 className="black">{this.props.subtitle}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="cm-career-list row">
                                    {vacancybox.map(this.renderDatasocial)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </section>

            </>
        );
    }
}

export default vacancy;