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
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 6}, 
                               {time: "2007-04-23T08:00:00.000Z", value: 8}, 
                               {time: "2007-04-23T12:00:00.000Z", value: 4}, 
                               {time: "2007-04-23T16:00:00.000Z", value: 23},
                               {time: "2007-04-23T20:00:00.000Z", value: 19},
                               {time: "2007-04-24T00:00:00.000Z", value: 7}]},
            { id: 3, name: "Wednesday", wind: 102, weather: "rain",
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 5}, 
                               {time: "2007-04-23T08:00:00.000Z", value: 2}, 
                               {time: "2007-04-23T12:00:00.000Z", value: 3}, 
                               {time: "2007-04-23T16:00:00.000Z", value: 4},
                               {time: "2007-04-23T20:00:00.000Z", value: 1},
                               {time: "2007-04-24T00:00:00.000Z", value: 7}]},
            { id: 4, name: "Thursday", wind: 7, weather: "clear",
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 1}, 
                                {time: "2007-04-23T08:00:00.000Z", value: 2}, 
                                {time: "2007-04-23T12:00:00.000Z", value: 6}, 
                                {time: "2007-04-23T16:00:00.000Z", value: 9},
                                {time: "2007-04-23T20:00:00.000Z", value: 2},
                                {time: "2007-04-24T00:00:00.000Z", value: 5}]},
            { id: 5, name: "Friday", wind: 76, weather: "storm",
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 19}, 
                                {time: "2007-04-23T08:00:00.000Z", value: 23}, 
                                {time: "2007-04-23T12:00:00.000Z", value: 18}, 
                                {time: "2007-04-23T16:00:00.000Z", value: 32},
                                {time: "2007-04-23T20:00:00.000Z", value: 22},
                                {time: "2007-04-24T00:00:00.000Z", value: 19}]},
            { id: 6, name: "Saturday", wind: 2, weather: "rain", 
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 9}, 
                                {time: "2007-04-23T08:00:00.000Z", value: 7}, 
                                {time: "2007-04-23T12:00:00.000Z", value: 1}, 
                                {time: "2007-04-23T16:00:00.000Z", value: 3},
                                {time: "2007-04-23T20:00:00.000Z", value: 1},
                                {time: "2007-04-24T00:00:00.000Z", value: 2}]},
            { id: 7, name: "Sunday", wind: 2, weather: "clouds",
            rainfallForecast: [{time: "2007-04-23T04:00:00.000Z", value: 7}, 
                                {time: "2007-04-23T08:00:00.000Z", value: 1}, 
                                {time: "2007-04-23T12:00:00.000Z", value: 19}, 
                                {time: "2007-04-23T16:00:00.000Z", value: 2},
                                {time: "2007-04-23T20:00:00.000Z", value: 7},
                                {time: "2007-04-24T00:00:00.000Z", value: 2}]},
        ]
    };

    render() {
        return (
            <div className="row">
                { this.state.cards.map(card => (
                    <WeatherCard key={card.id} name={card.name} wind={card.wind} weather={card.weather} rainfallForecast={card.rainfallForecast}/>
                ))}
            </div>
        );
    }
}

export default WeatherCards;