import React, { Component } from 'react';

class bigbglatter extends Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            offsetX: '',
            offsetY: '',
            friction: 1 / 32
        }
        this._mouseMove = this._mouseMove.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousemove', this._mouseMove);
    }
    componentWillUnmount() {
        document.removeEventListener('mousemove', this._mouseMove);
    }
    _mouseMove(e) {
        let followX = (window.innerWidth / 2 - e.clientX);
        let followY = (window.innerHeight / 2 - e.clientY);

        let x = 0,
            y = 0;
        x += ((-followX - x) * this.state.friction);
        y += (followY - y) * this.state.friction;
        this.setState({
            offsetX: x,
            offsetY: y
        });
    }
    render() {
        let offset = {
            transform: `translate3d(${this.state.offsetX}px, ${this.state.offsetY}px, 0)`
        }
        return (
            <div className="big-background-letter" style={offset}>
                <span>{this.props.biglatter}</span>

            </div>
        );
    }
}

export default bigbglatter;