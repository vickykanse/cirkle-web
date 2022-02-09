import React, { Component } from 'react';

class pannel extends Component {
  render() {
    return (

        <>
        {this.props.children}
        </>
    );
  }
}

export default pannel;