import React, { Component } from 'react';
import WeatherCard from './weatherCard'

class NavBar extends Component {
  state = {}
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Weather</span>
            </nav>
        </div>
    );
  }
}

export default NavBar;