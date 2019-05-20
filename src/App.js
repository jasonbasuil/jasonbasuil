import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sidebar from './containers/Sidebar.js'
import Home from './containers/Home.js'
import Introduction from './containers/Introduction.js'
import About from './containers/About.js'
import Projects from './containers/Projects.js'
import Contact from './containers/Contact.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div class='side-bar'>
          <Sidebar />
        </div>
        <div class='page'>
          <div class='main-container'>
            <Introduction />
            <About />
            <Projects />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />

          </div>
        </div>
      </div>
    );
  }
}

export default App;

// <Router>
//   <div class='navbar'>
//      <Link exact to="/home">Home</Link>{' '}
//      <Link exact to="/about">About</Link>{' '}
//      <Link exact to="/projects">Projects</Link>{' '}
//      <Link exact to="/contact">Contact</Link>{' '}
//   </div>
//
//   <Route path='/home'component={Home}/>
//   <Route path='/about'component={About}/>
//   <Route path='/projects'component={Projects}/>
//   <Route path='/contact'component={Contact}/>
// </Router>
