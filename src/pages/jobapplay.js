import React, { Component } from 'react';
import Jobapplay from "../Components/jobapplaycomponent";

class jobapplay extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'company-pages', 'job-apply-page-main');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'company-pages', 'job-apply-page-main');
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
                <Jobapplay />
            </>
        );
    }
}

export default jobapplay;