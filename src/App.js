import React, { Component } from 'react';
import NavBar from './components/navbar'
import WeatherCards from './components/weatherCards'
import './App.css';

class App extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <WeatherCards />
        </main>
      </React.Fragment>
    )
  }
}

export default App;
