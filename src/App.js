import React from 'react';
import './css/App.css';
import { Link, Route, Switch } from "react-router-dom";
// import "animate.css/animate.min.css";
import Main from './pages/index';
import About from './pages/about';
import Company from './pages/Comapny';
import Header from '../src/Components/Header';
import Appdevlopment from './pages/appdevelopement';
import Testimonial from './pages/testimonial';
import Career from './pages/career';
import Jobapplay from './pages/jobapplay';
import Contectus from './pages/contectus';
import Qatesting from './pages/qatesting';
import Uiux from './pages/uiux'
import WebsiteDevlopment from './pages/webdev'
import Team from './pages/team'
import Portfolio from './pages/portfolio'


function App() {

  return (
    <div className="App">
      <Header></Header>

      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Company" component={Company} />
          <Route exact path="/Appdevlopment" component={Appdevlopment} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Career" component={Career} />
          <Route exact path="/Testimonial" component={Testimonial} />
          <Route exact  path="/Jobapplay/:careerId"  >
            <Jobapplay/>
          </Route>
          <Route exact path="/Contectus" component={Contectus} />
          <Route exact path="/Qatesting" component={Qatesting} />
          <Route exact path="/Uiux" component={Uiux} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/WebsiteDevlopment" component={WebsiteDevlopment} />
      </Switch>

    </div>
  );
}

export default App;
