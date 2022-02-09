import React, { Component } from 'react';
import Teamcomponents from '../Components/Teamcomponent'



class team extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'team-page-main', 'company-pages');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'team-page-main', 'company-pages');
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
                <Teamcomponents />
            </>
        );
    }
}

export default team;