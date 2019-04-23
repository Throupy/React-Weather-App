import React, { Component } from 'react';
import WeatherCard from './weatherCard';

class WeatherCards extends Component {
    state = {
        cards: [
            { id: 1, name: "Monday", wind: 4, weather: "clear", 
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 3}, 
                               {time: "2007-04-23T08:00:00.000Z", value: 4}, 
                               {time: "2007-04-23T12:00:00.000Z", value: 9}, 
                               {time: "2007-04-23T16:00:00.000Z", value: 1},
                               {time: "2007-04-23T20:00:00.000Z", value: 19},
                               {time: "2007-04-24T00:00:00.000Z", value: 3}]},
            { id: 2, name: "Tuesday", wind: 9, weather: "clouds",
            rainfallForecast: [{time: "1556074800", value: 6}, 
                               {time: "1556074800", value: 8}, 
                               {time: "1556074800", value: 4}, 
                               {time: "1556074800", value: 23},
                               {time: "1556074800", value: 19},
                               {time: "1556074800", value: 7}]},
            { id: 3, name: "Wednesday", wind: 102, weather: "rain",
            rainfallForecast: [{time: "1556074800", value: 5}, 
                               {time: "1556074800", value: 2}, 
                               {time: "1556074800", value: 3}, 
                               {time: "1556074800", value: 4},
                               {time: "1556074800", value: 1},
                               {time: "1556074800", value: 7}]},
            { id: 4, name: "Thursday", wind: 7, weather: "clear",
            rainfallForecast: [{time: "1556074800", value: 1}, 
                                {time: "1556074800", value: 2}, 
                                {time: "1556074800", value: 6}, 
                                {time: "1556074800", value: 9},
                                {time: "1556074800", value: 2},
                                {time: "1556074800", value: 5}]},
            { id: 5, name: "Friday", wind: 76, weather: "storm",
            rainfallForecast: [{time: "1556074800", value: 19}, 
                                {time: "1556074800", value: 23}, 
                                {time: "1556074800", value: 18}, 
                                {time: "1556074800", value: 32},
                                {time: "1556074800", value: 22},
                                {time: "1556074800", value: 19}]},
            { id: 6, name: "Saturday", wind: 2, weather: "rain", 
            rainfallForecast: [{time: "1556074800", value: 9}, 
                                {time: "1556074800", value: 7}, 
                                {time: "1556074800", value: 1}, 
                                {time: "1556074800", value: 3},
                                {time: "1556074800", value: 1},
                                {time: "1556074800", value: 2}]},
            { id: 7, name: "Sunday", wind: 2, weather: "clouds",
            rainfallForecast: [{time: "1556074800", value: 7}, 
                                {time: "1556074800", value: 1}, 
                                {time: "1556074800", value: 19}, 
                                {time: "1556074800", value: 2},
                                {time: "1556074800", value: 7},
                                {time: "1556074800", value: 2}]},
        ],
        data: [],

        newCards: []
    };

    getData() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2633563&appid=3d786732e9e4f1b7ea30d895eb7ed5db", {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({ data:json })
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            let z = [{id: 7, name: "Sunday", wind: 2, weather: "clouds"}] //Cards
            let x = [] // Rainfall forecast
            for (let index = 0; index < 8; index++) {
                var d = new Date(this.state.data.list[index].dt * 1000)
                let y = {time:d.toISOString(), value:Math.round(this.state.data.list[index].main.temp)}
                x.push(y)
            }
            z[0].name = days[d.getDay()]
            z[0]['rainfallForecast'] = x
            this.setState({ newCards: z })
            
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <React.Fragment>
            <div className="row">
                { this.state.newCards.map(card => (
                    <WeatherCard key={card.id} name={card.name} wind={card.wind} weather={card.weather} rainfallForecast={card.rainfallForecast}/>
                ))}
            </div>
            </React.Fragment>
        );
    }
}

export default WeatherCards;