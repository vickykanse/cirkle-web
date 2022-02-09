import React, { Component } from 'react';
import './startchatcomponent/startchat.css'
import Startchatbutton from './startchatcomponent/startchatbutton';
import Startchatpopup from  './startchatcomponent/startchatpopup';
class startchatcomponent extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        document.body.classList.add('popup_active');
        this.setState({ isOpen: !this.state.isOpen })
    }
    hidepopup = () =>{
        document.body.classList.remove('popup_active');
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
           <>
              <Startchatbutton onClick={this.handleToggle}/>
              <Startchatpopup openpopup={this.state.isOpen ? "popup_active" : ""} hidepopup={this.hidepopup}/>
           </>
        );
    }
}

export default startchatcomponent;