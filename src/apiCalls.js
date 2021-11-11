import {apiKey, geoCoordinates, locations} from './constants'
import {processLocationWeatherData} from './dataProcessor'

export const requestLocationCurrentWeather = async (location) => {
    const options = {
        method: 'GET',
        headers: {}
    }
    const url = "https://api.openweathermap.org/data/2.5/onecall"
    const lat = geoCoordinates[location][0]
    const lon = geoCoordinates[location][1]
    const apiUrl = `${url}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`
    const res = await fetch(apiUrl, options)
    if (res.status !== 200) return null
    return await res.json()
}

export const requestAllLocationsWeatherData = async (setLocationsWeatherData) => {
    const options = {
        method: 'GET',
        headers: {}
    }
    const url = "https://api.openweathermap.org/data/2.5/onecall"

    Promise.all(locations.map((location) => {
        const lat = geoCoordinates[location][0]
        const lon = geoCoordinates[location][1]
        const apiUrl = `${url}?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`
        return fetch(apiUrl, options)
    })).then(function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        const allLocationsWeatherData = {}
        data.forEach((row, idx) => {
            allLocationsWeatherData[locations[idx]] = processLocationWeatherData(row)
        })
        setLocationsWeatherData(allLocationsWeatherData)
    })
}
