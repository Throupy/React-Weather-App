import React, { Component } from 'react';
import WeatherCard from './weatherCard';

class WeatherCards extends Component {
    state = {
        data: [],
        cards: []
    };

    
    prepareCards() {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let cards = [] //Cards
        let count = 0
        for (let index = 0; index < 5; index++) {
            let temperatureForecast = []
            cards.push({id: index, name: null, wind: null, weather: null, conditions: null})
            for (let j = 0; j < this.state.data.list.length / 5; j++) {
                count++
                var date = new Date(this.state.data.list[count-1].dt * 1000)
                let event = {time: date.toISOString(), value: Math.round(this.state.data.list[count-1].main.temp)}
                temperatureForecast.push(event)
            }   
            cards[index].name = days[date.getDay()]
            cards[index].wind = Math.round(this.state.data.list[count-1].wind.speed)
            cards[index].weather = this.state.data.list[count-1].weather[0].icon
            cards[index].conditions = this.state.data.list[count-1].weather[0].description
            cards[index]['temperatureForecast'] = temperatureForecast
            console.log(cards)
        }
        this.setState({ cards: cards })
    }


    getData() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2633563&appid=3d786732e9e4f1b7ea30d895eb7ed5db", {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({ data:json })
            this.prepareCards();
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <React.Fragment>
            <div className="row">
                { this.state.cards.map(card => (
                    <WeatherCard key={card.id} name={card.name} wind={card.wind} weather={card.weather} conditions={card.conditions} temperatureForecast={card.temperatureForecast}/>
                ))}
            </div>
            </React.Fragment>
        );
    }
}

export default WeatherCards;