import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './Components/topContact/topContact';
import { NavBar } from './Components/Nav/navBar';
import { Footer } from './Components/Footer/footer';

import Home from './Components/Home/Home';
import Bog from './Components/Bog/Bog';
import Admin from './Components/Admin/Admin';
import Teacher from './Components/Teacher/Teacher';
import IbCoco from './Components/IbCoco/IbCoco';
import Counselling from './Components/Counselling/Counselling';
import Admission from './Components/Admission/Admission';
import Contact from './Components/Contact/Contact';
import Achievement from './Components/Achievement/Achievement';
import Student from './Components/Student/Student';
import Facilities from './Components/Facilities/Facilities';
import Activities from './Components/Activities/Activities';
import Graduation from './Components/Graduation/Graduation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='index'>
        <div className='index-nav'>
          <Top />
          <NavBar />
        </div>

        <div className='index-main'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Bog" component={Bog} />
            <Route path="/Admin" component={Admin} />
            <Route path="/Teacher" component={Teacher} />
            <Route path="/IbCoco" component={IbCoco} />
            <Route path="/Counselling" component={Counselling} />
            <Route path="/Admission" component={Admission} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Achievement" component={Achievement} />
            <Route path="/Student" component={Student} />
            <Route path="/Facilities" component={Facilities} />
            <Route path="/Activities" component={Activities} />
            <Route path="/Graduation" component={Graduation} />
            {/* Add more routes as needed */}
          </Switch>
        </div>

        <div className='index-footer'>
          <Footer />
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
