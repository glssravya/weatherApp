import axios from "axios";

const API_KEY = 'afd5f2e93b50e0d6e0fc55f1fd057e7e'
const BASE_URL =  `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export function fetchWeather(city) {
    
    const api = `${BASE_URL}&q=${city}`;
    const getWeatherData = axios.get(api);
    
    return {
        type:FETCH_WEATHER,
        payload:getWeatherData
    }
}
export function fetchWeatherNew(city){
    const api = `${BASE_URL}&q=${city}`;
    const getWeatherData = axios.get(api)
    return axios.get(api)
    .then((response) => {
      dispatch({type: FETCH_WEATHER, payload: response.data});
    })
    .catch((err) => {
      dispatch({type: FETCH_DATA_ERROR, payload: err}); // Error handling
    });
}
