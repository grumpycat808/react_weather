import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData){
        
        const temps = cityData.list.map(weather => weather.main.temp );
        const humidities = cityData.list.map(weather => weather.main.humidity );
        const pressures = cityData.list.map(weather => weather.main.pressure );
        return(
            <tr key={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td><Chart data={temps} color="orange" /></td>
                <td><Chart data={temps} color="green" /></td>
                <td><Chart data={temps} color="black" /></td>
            </tr>
        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//map state to props...same as the function below. Refactored to use ES6 syntax

function mapStateToProps({weather}) {
    return {
        weather: weather
    }
}

/*
function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}
 */
//connect to component to map state to props

export default connect(mapStateToProps)(WeatherList);