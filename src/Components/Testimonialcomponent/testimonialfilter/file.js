import React, { Component } from 'react';
import Starwidget from '../../starcomponent/StarWidget'
import c from '../../../images/testimonial/clutch.png'
class file extends Component {
    // constructor () {
    //     super()
    
    //     this.state = { rating: 5 }
    //   }
    render() {
        return (
             <li className='file-item'>
                 <div className="crew-member-card">
                     <div className="crew-img" style={{ backgroundImage: `url(${this.props.profileimg})` }}></div>
                     <h4>
                          {this.props.name}
                          <span className="position">{this.props.designation}<a>{this.props.highlighted}</a></span>
                     </h4>
                     <h5 className="location">{this.props.location}</h5>
                     <div className="short-feedback">
                             <p>{this.props.feedback}</p>
                     </div>
                     <div>
                         <div className="cs-testimonial-item__clutch">
                              <div className="cs-testimonial-item__clutch-logo">
                                  <img src={c}/>
                              </div>
                             <div className="cs-testimonial-item__clutch-rate">{this.props.star}</div>
                             <Starwidget
                                    min={1}
                                    max={5}
                                    onChange={(rating) => this.setState({ rating })}
                                    value={this.props.star}
                                />
                         </div>
                         <a className="read_more" href="https://clutch.co/profile/cirkle-studio" target="_blank">Read more on Clutch <i className="icon-bt-next"></i></a>
                     </div>
                 </div>
             </li>
        );
    }
}

export default file;