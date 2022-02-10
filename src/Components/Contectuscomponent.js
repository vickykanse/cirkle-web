import React, { Component,lazy, Suspense } from 'react';

const Contectussection = React.lazy(() => import('./contectuscomponent/contectussection'));

class Contectuscomponent extends Component {
    render() {
        return (
            <>
               
                <Suspense fallback={<><div id="overlay"></div><span class="loader"><span class="loader-inner"></span></span></>}>
                <Contectussection />
                </Suspense>
            </>
        );
    }
}

export default Contectuscomponent;