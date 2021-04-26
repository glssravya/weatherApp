import React from 'react'
import {connect} from 'react-redux'
import DayCard from '../components/dayCard'

class WeatherCards extends React.Component{
    getWeekDayData = (data) => {
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return weekdays[new Date(data[0].dt_txt).getDay()];
    }
    getIcon = (data) => {
        return {icon:`https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`,
                iconText:data[0].weather[0].main,
                iconDesc:data[0].weather[0].description 
        }
    }
    getWeatherDetails = (data) => {
        let max = [],min = [],humidity = [];
        data.map(day => {
            max.push(day.main.temp_max);
            min.push(day.main.temp_min);
            humidity.push(day.main.humidity);
        });
        let minTemp = Math.round(Math.min(...min));
        let maxTemp = Math.round(Math.max(...max));
        let avgHumidity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);
        return { minTemp,maxTemp,avgHumidity}
    }
    getDetails = (data) => {
        let {iconText,icon,iconDesc} = this.getIcon(data)
        return {day:this.getWeekDayData(data),
                icon,
                iconText,
                iconDesc,
                maxTemp:this.getWeatherDetails(data).maxTemp,
                minTemp:this.getWeatherDetails(data).minTemp,
                humidity:this.getWeatherDetails(data).avgHumidity
            }
    }
    render() {
        let {weather,cityInfo} = this.props
        console.log(this.props);
        return (
            <section className="ajax-section">
            { weather.length === 0 ? (
                 <div className="loading">
                   <div className="spinner">Loading Weather Forecast...</div>
                 </div>
               ) : (
             <div className="container"><h3 className="cityData">{cityInfo.name} ({cityInfo.country})</h3>
                 <ul className="cities">
                     {weather.map((day,i) => {
                         return <DayCard data={this.getDetails(day)} key={i}  />
                     })}
                 </ul>
             </div>)}
         </section>
        )
    }
}
function mapStateToProps({weather}){
    return {
        weather:weather.daysInfo,
        cityInfo:weather.cityInfo,
        error:weather.error
    }
}
 export default connect(mapStateToProps)(WeatherCards)