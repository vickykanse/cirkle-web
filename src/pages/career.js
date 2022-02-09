import React, { Component } from 'react';
import Career from "../Components/Career"

class career extends Component {
    componentDidMount() {
        document.body.classList.add('innerpage', 'company-pages');
        window.addEventListener("scroll", this.toggleBodyClass);
        this.toggleBodyClass();

    }

    componentWillUnmount() {
        document.body.classList.remove('innerpage', 'company-pages');
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
                <Career />
            </>
        );
    }
}

export default career;