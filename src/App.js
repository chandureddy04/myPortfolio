import React from 'react'
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import ParticleComponent from "./ParticleComponent";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <ParticleComponent />
        <Switch>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/education'>
            <Education />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
