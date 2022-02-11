import React, { Component } from 'react';
import chat from '../../images/chat-1.svg'

class startchatbutton extends Component {
    render() {
        return (
            <>
             <div className="cm_start_project_btn lets-start-btn" onClick={this.props.onClick}>
                <img src={chat} alt=""/>
                <label>Start Chat</label>
             </div> 
             <div className="cm_side_logo cm_right_side_bar" onClick={this.props.onClick}>
                <div className="cm_inner_logo">
                    <a href="javascript:;" className="cm_start_project_btn">Start Project</a>
                </div>
             </div>
             </>
        );
    }
}

export default startchatbutton;