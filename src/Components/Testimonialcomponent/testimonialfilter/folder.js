import React, { Component } from 'react';

class folder extends Component {
    render() {
        return (
            <li className='file-item'>
                
                  <div className="cm-section-title anim-title text-left">
                        <div>
                             <span className="styled-span"><img  src={this.props.flag}/> {this.props.name}</span>
                             <h2 className="black">{this.props.subtitle}</h2>
                        </div> 
                 </div>
             </li>
        );
    }
}

export default folder;