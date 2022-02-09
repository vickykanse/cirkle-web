import React, { Component } from 'react';
import Qatestingcomponent from "../Components/qatestingcomponents"

class qatesting extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'web-development-main');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'web-development-main');
        window.removeEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }
    toggleBodyClass = () => {
        let headertop = document.querySelector('.header-top');
        if (window.scrollY < 100) {


            headertop.classList.remove("sticky");
        } else {

            headertop.classList.add("sticky");
        }
    };
    render() {

        return (
            <>
                <Qatestingcomponent />
            </>
        );
    }
}

export default qatesting;