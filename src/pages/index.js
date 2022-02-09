import React, { Component, lazy, Suspense } from 'react';

// import Header from '../Components/Header';

const Homepage = React.lazy(() => import('../Components/Homepage'));
const Leftsaidelogo = React.lazy(() => import('../Components/homepagecomponent/leftsaidbar/leftsaidbar'));
const Startchat = React.lazy(() => import('../Components/startchatcomponent'));

// const About_block = React.lazy(()=>import('../Components/About_block'));
// const Project_content = React.lazy(()=>import('../Components/Project_content'));
// const Casestudyblock = React.lazy(()=>import('../Components/CaseStudyblock'));
// const ProductIdea = React.lazy(()=>import('../Components/Productidea'));
// const Letsdo = React.lazy(()=>import('../Components/Letstart'));
// const Footer = React.lazy(()=>import('../Components/footer'));

class index extends Component {

    componentDidMount() {
        document.body.classList.add("mainpage");
        let headertop = document.querySelector('.header-top');
        headertop.classList.remove("sticky");
    }

    componentWillUnmount() {

        document.body.classList.remove("mainpage");
    }

    render() {

        // const fullpageOptions = {
        //     anchors: ["firstPage", "secondPage", "thirdPage", "fourPage", "fivePage"],
        //     // sectionsColor: ["#282c34", "#ff5f45", "#0798ec"],
        //     callbacks: ["onLeave"],
        //     scrollOverflow: true
        // };
        return (
            <>
                {/* <Header></Header> */}
                <Suspense fallback={<><div id="overlay"></div><span className="loader"><span className="loader-inner"></span></span></>}>
                    <Leftsaidelogo />
                    <Startchat />
                    <Homepage  ></Homepage>

                    {/* <About_block></About_block>
                    <Project_content></Project_content>
                    <Casestudyblock></Casestudyblock>
                    <ProductIdea ></ProductIdea>
                    <Letsdo></Letsdo>
                    <Footer></Footer> */}
                </Suspense>
            </>
        );
    }
}

export default index;