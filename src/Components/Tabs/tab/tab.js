import React, { Component } from 'react';

class tab extends Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default tab;