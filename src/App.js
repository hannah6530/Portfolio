import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Portfolio from './Portfolio';
import Clients from './Clients';

class App extends React.Component {

  render(){

    return (
      <div>

          <Header />
          <Section />
          <Portfolio />
          <Clients />
      
        </div>
      );

  }
  
}

export default App;
