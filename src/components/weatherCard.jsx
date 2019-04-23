import React, { Component } from 'react';

class WeatherCard extends Component {
  styles = {
      width: 100,
      height: 100
  }
  getWeatherImage(temperature) {
    if (temperature < 10) {
        return require('../images/cold.png')
    } else if (temperature > 10 && temperature <= 20) {
        return require('../images/average.png')
    } else {
        return require('../images/hot.png')
    }
  }

  render() {
    return (
        <div className="card mb-2 mr-2 mt-2" style={{width: '18rem'}}>
            <img className="card-img-top" style={this.styles} src={this.getWeatherImage(this.props.temp)} />
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">Temperature: <b>{this.props.temp}°C</b></p>
                <p className="card-text">Wind Speeds: <b>{this.props.wind}mph</b></p>
            </div>
        </div>
    );
  }
}

export default WeatherCard;