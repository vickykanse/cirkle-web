import React, { Component } from 'react';
import Modal from '../portfoliosidebar/portfoliomodal'

class profile extends Component {
    state = {
        showModal: 0
      };
    
      getModal = value => {
        document.body.classList.add('profile_active');
        this.setState({ showModal: value });
      };
    
      hideModal = value => {
        document.body.classList.remove('profile_active');
        this.setState({ showModal: 0 });
      };
    render() {
        return (
          <section data-header-group="black_header" className="our-work-profile">
              <div className="scrolligtext">
                  <span>Our Portfolio</span>
              </div>
              <div className="cm-section-title portfolio text-center anim-title">
                  <div className="aos" data-aos="fade-right">
                      <h2 className="portfolio">Our portfolio</h2>
                  </div>
                  <div className="seperator aos" data-aos="fade-up"></div>
              </div>
              <div className="cm-portfolio-inner">
                  <div className="cm-pot-inner-wrapper">

                     {this.props.data.map((data, key) => (
                       <>
                        <div key={key}  className="cm-pot-parts">
                        <div className="showcaseitem themecolor1" data-aos="zoom-in" data-aos-delay="300">
                            <div className="showcase-item__bcg pot-img-one"
                                style={{ backgroundImage: `url(${data.cardimg})` }}></div>
                            <div className="showcase-item__wrap">
                                <div className="showcase-item_logobox">
                                    <img src={data.logo} alt="Portfolio logo" />
                                </div>
                                <span className="pot-title">
                                     {data.name}
                                </span>
                                <div className="posts-row__btn pot-details-btn">
                                    <div className="pot-btn-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 171.04">
                                            <g id="b62c9b6b-9984-40c4-baa5-f3565e6be396">
                                                <g id="3f0e614d-7712-40c5-a74e-a5a49eab128b">
                                                    <path
                                                        d="M146.51 40.21L78.49.93a7 7 0 0 0-7 0l-68 39.28a7 7 0 0 0-3.49 6v78.59a7 7 0 0 0 3.49 6l68 39.27a7 7 0 0 0 7 0l68-39.27a7 7 0 0 0 3.49-6V46.25a7 7 0 0 0-3.47-6.04z"
                                                        className="f1b79d3f-0b70-4d3c-957f-e02a75b8cb80"></path>
                                                    <path d="M77 142.09l46-26.54a4 4 0 0 0 2-3.49V59"
                                                        className="6a36371e-892a-4dd0-af0d-afa60d0387b1"></path>
                                                    <path d="M73 29L27 55.49A4 4 0 0 0 25 59v53.08"
                                                        className="6a36371e-892a-4dd0-af0d-afa60d0387b1"></path>
                                                </g>
                                            </g>
                                        </svg>
                                        <div className="posts-row__btn-txt" onClick={() => this.getModal(data.id)}>Detail</div>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                  
                    <Modal
                    show={this.state.showModal === data.id}
                    onHide={() => this.hideModal(data.id)}
                    name={data.name}
                    description={data.description}
                  >
                       {data.projects.map((data, key) => (
                    
                            <div key={data.id} className="project-image">
                                 <img src={data.imgs} alt="Portfolio Image" />
                            </div>
                       ))}
                  </Modal>
                  </>
                          // <div key={key} className="small">
                          //   <p>Namsse: </p>
                          //   <button onClick={() => this.getModal(data.id)}>Popup</button>
                          //   <Modal
                          //     show={this.state.showModal === data.id}
                          //     onHide={() => this.hideModal(data.id)}
                          //     name={data.name}
                          //   />
                          // </div>
                        ))}

                  </div>

              </div>
          </section >
         
        );
    }
}

export default profile;