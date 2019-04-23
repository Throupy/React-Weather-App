import React, { Component } from 'react';
import WeatherCard from './weatherCard';

class WeatherCards extends Component {
    state = {
        cards: [
            { id: 1, name: "Monday", temp: 5, wind: 4 },
            { id: 2, name: "Tuesday", temp: 16, wind: 9 },
            { id: 3, name: "Wednesday", temp: 124, wind: 102 }
        ]
    };

    render() {
        return (
            <div className="row">
                { this.state.cards.map(card => (
                    <WeatherCard key={card.id} name={card.name} temp={card.temp} wind={card.wind}/>
                ))}
            </div>
        );
    }
}

export default WeatherCards;