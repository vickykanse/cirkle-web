import React, { Component } from 'react';

class tabs extends Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let active = this.state.active === i ? `${this.props.active } current` : '';
      return <li className={`${active} tab-link`}><a onClick={this.select(i)} className={`${active} tab`}>{item}</a></li>;
      }
    });
  }
  
  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div className='tab-content current'>{item}</div>;
      } else {
        return;
      }
    });
  }
  
  render() {
 
       
    const {tabtitle,tabcontenttitle,size} = this.props
    // const tabclass = `
    // tabs
    // ${size === 'lg' && 'lg-tab-dropdown'}
    // `;
    let tabtitlename;
        if (tabtitle === true) {
          tabtitlename = <span className="tabtitle">{this.props.tabtitlelabel}</span>;
        } else {
          tabtitlename = null;
        }
        
    return (
      <>
        <ul className={this.props.tabstyle + ' tabs'}>
          {tabtitlename}
        {this.renderTabs()}
        </ul>
       
         
        {this.renderContent()}
      </>
    );
  }
}

export default tabs;