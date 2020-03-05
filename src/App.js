import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Blog';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Main from './Main';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Services from './Services';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Contact from './Contact';

class App extends React.Component {

  render(){

    return (
      <div>

          <Header />
          <Main />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Services />
          <Portfolio />
          <Testimonial />
          <Blog />
          <Contact />
      
        </div>
      );

  }
  
}

export default App;
