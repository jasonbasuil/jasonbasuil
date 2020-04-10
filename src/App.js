import React from 'react';

import Sidebar from './containers/Sidebar.js'
import Header from './containers/Header.js'
import Introduction from './containers/Introduction.js'
import About from './containers/About.js'
import Projects from './containers/Projects.js'
import Career from "./containers/Career"
import Tech from "./containers/Tech.js"

import './App.css';

const App = () => {

    return (
      <div className="App">
        <Sidebar />
        <div class='page'>
          <div class='main-container'>
            <Header />
            <Introduction />
            <Tech />
            <Career/>
            <About />
            <Projects />
          </div>
        </div>
      </div>
    );
  }

export default App;

