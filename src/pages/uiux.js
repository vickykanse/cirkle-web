import React, { Component } from 'react';
import Uiuxcomponet from '../Components/uiuxcomponent'

class uiux extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'ui-ux-page-main');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'ui-ux-page-main');
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
                <Uiuxcomponet />
            </>
        );
    }
}

export default uiux;