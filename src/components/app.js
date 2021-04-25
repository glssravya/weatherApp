import React, { Component } from 'react';
import Searchbar from '../containers/searchbar'
//import WeatherCards from '../containers/weathercards'
import WeatherCards from  '../containers/weathercards'

export default class App extends Component {
  render() {
    return (
      <div> 
        <Searchbar />
        <WeatherCards />
      </div>
    );
  }
}
