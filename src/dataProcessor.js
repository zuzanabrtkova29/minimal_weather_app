import {format} from 'date-fns'

export const processLocationWeatherData = (data) => {
    if (!data)
        return null
    const locationWeatherData = {}
    if (data.current) {
        if (data.current.weather && data.current.weather.length > 0 && data.current.weather[0].main) {
            locationWeatherData.weather = data.current.weather[0].main
        }
        if (data.current.temp) {
            locationWeatherData.temp = Math.round(data.current.temp)
        }
        if (data.current.humidity) {
            locationWeatherData.humidity = data.current.humidity
        }
        if (data.current.pressure) {
            locationWeatherData.pressure = data.current.pressure
        }
        if (data.current.wind_speed) {
            locationWeatherData.windSpeed = Math.round(data.current.wind_speed)
        }
        let sunriseTime;
        let sunsetTime;
        if (data.current.sunrise) {
            sunriseTime = new Date(data.current.sunrise * 1000)
            locationWeatherData.sunrise = format(sunriseTime, "H:mm aa")
        }
        if (data.current.sunset) {
            sunsetTime = new Date(data.current.sunset * 1000)
            locationWeatherData.sunset = format(sunsetTime, "H:mm aa")
        }
        if (sunriseTime && sunsetTime) {
            const daytime = (sunsetTime - sunriseTime)
            const minutesBetween = Math.floor(daytime / 60000)
            locationWeatherData.daytime = "" + Math.floor(minutesBetween / 60) + "h " + minutesBetween % 60 + "m"
        }
    }
    if (data.daily && data.daily.length > 0) {
        if (data.daily[0].temp && data.daily[0].temp.min) {
            locationWeatherData.tempMin = Math.round(data.daily[0].temp.min)
        }
        if (data.daily[0].temp && data.daily[0].temp.max) {
            locationWeatherData.tempMax = Math.round(data.daily[0].temp.max)
        }
        if (data.daily[0].temp && data.daily[1].temp.min) {
            locationWeatherData.tempMin1 = Math.round(data.daily[1].temp.min)
        }
        if (data.daily[0].temp && data.daily[1].temp.max) {
            locationWeatherData.tempMax1 = Math.round(data.daily[1].temp.max)
        }
        if (data.daily[0].temp && data.daily[2].temp.min) {
            locationWeatherData.tempMin2 = Math.round(data.daily[2].temp.min)
        }
        if (data.daily[0].temp && data.daily[2].temp.max) {
            locationWeatherData.tempMax2 = Math.round(data.daily[2].temp.max)
        }
        if (data.daily[0].temp && data.daily[3].temp.min) {
            locationWeatherData.tempMin3 = Math.round(data.daily[3].temp.min)
        }
        if (data.daily[0].temp && data.daily[3].temp.max) {
            locationWeatherData.tempMax3 = Math.round(data.daily[3].temp.max)
        }
    }
    return locationWeatherData
}