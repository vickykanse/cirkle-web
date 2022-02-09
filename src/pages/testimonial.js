import React, { Component } from 'react';
import Testimonial from "../Components/testimonialcomponent"

class testimonial extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'testimonial-page-main', 'company-pages');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'testimonial-page-main', 'company-pages');
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
            <Testimonial />
        );
    }
}

export default testimonial;