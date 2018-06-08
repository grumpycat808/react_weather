import axios from 'axios';

const API_KEY = 'be3be64e94af521a7b876d98e09e1481';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    //If the payload is a Promise, redux-promise stops the action and dispatches an object with a payload property of the resolved request
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}