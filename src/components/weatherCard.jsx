import React, { Component } from 'react';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { LinearGradient } from '@vx/gradient';
import { scaleTime, scaleLinear } from '@vx/scale';
import { curveMonotoneX } from '@vx/curve';
import { Group } from '@vx/group';
import { extent, max } from 'd3-array';
import { AreaClosed  } from '@vx/shape';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class WeatherCard extends Component {
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      maxTemp: 0,
      minTemp: 0
    };
  }

  componentDidMount() {
    // Calculate minimum and maximum temperatures.
    this.setState({ maxTemp: Math.max.apply(Math, this.props.temperatureForecast.map(function(o) { return o.value; })),
                    minTemp: Math.min.apply(Math, this.props.temperatureForecast.map(function(o) { return o.value; }))})
  }


  styles = {
      width: 100,
      height: 100
  }

  handleClose() {
    this.setState({ show: false })
  } 

  handleShow() {
    this.setState({ show: true })
  }

  getWeatherImage(weather) {
    return require("../images/" + weather + ".png");
  }

  createVisualisation() {
    const data = this.props.temperatureForecast;
    const width = 450;
    const height = 400;
    const margin = {
      top: 60,
      bottom: 60,
      left: 80,
      right: 80,
    };
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    const x = d => new Date(d.time); // d.date is unix timestamps
    const y = d => d.value;
    data.map(y); // Gives an array of all the y values
    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x),
    });

    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)],
    });
    const chart = (
      <svg width={width} height={height}>
        <Group top={margin.top} left={margin.left}>
              <AxisLeft
                scale={yScale}
                top={0}
                left={0}
                label={'Temperature (°C)'}
                stroke={'#1b1a1e'}
                tickTextFill={'#1b1a1e'}
              />
            <AxisBottom
                scale={xScale}
                top={yMax}
                label={'Time'}
                stroke={'#1b1a1e'}
                tickTextFill={'#1b1a1e'}
                numTicks={this.props.temperatureForecast.length}
              />
            <LinearGradient
              from='#d14d36'
              to='#f4b042'
              id='gradient'
            />
            <AreaClosed
            data={data}
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
            yScale={yScale}
            strokeWidth={1}
            stroke={'url(#gradient)'}
            fill={'url(#gradient)'}
            curve={curveMonotoneX}
              />
        </Group>
</svg>
    )
    return chart
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-3 card mb-2 mr-2 mt-2" style={{width: '18rem'}}>
            <img className="card-img-top" alt="" style={this.styles} src={this.getWeatherImage(this.props.weather)} />
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">Conditions: <b>{this.props.conditions}</b></p>
                <p className="card-text">Temperature: <b>{this.state.maxTemp}°C</b>  {this.state.minTemp}°C</p>
                <p className="card-text">Wind Speeds: <b>{this.props.wind}mph</b></p>
            </div>
            <div className="card-footer">
            <Button variant="secondary" onClick={this.handleShow}>View More</Button>
            </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {this.createVisualisation()}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default WeatherCard;