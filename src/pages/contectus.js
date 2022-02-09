import React, { Component } from 'react';
import Contectuscomponent from '../Components/Contectuscomponent'

class contectus extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'contact-page-main');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'contact-page-main');
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
                <Contectuscomponent />
            </>
        );
    }
}

export default contectus;