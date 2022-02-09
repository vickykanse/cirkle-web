import React, { Component } from 'react';

class option extends Component {
    render() {
        return (
            <option  value={this.props.value}>{this.props.name}</option>
        );
    }
}

export default option;