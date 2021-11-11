import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {getSelectedLocation, getScreenWidth} from '../reduxUtils'
import {format} from 'date-fns'
import TopWeatherRow from './TopWeatherRow'
import MainScreenPanelWeatherRow from './MainScreenPanelWeatherRow'
import iconblue from '../assets/iconblue.png'
import humidityIcon from '../assets/humidity.png'
import pressureIcon from '../assets/pressure.png'
import windIcon from '../assets/wind.png'
import sunriseIcon from '../assets/sunrise.png'
import sunsetIcon from '../assets/sunset.png'
import daytimeIcon from '../assets/daytime.png'
import MainScreenPanelFutureWeatherRow from "./MainScreenPanelFutureWeatherRow";

const MainScreenPanelContainer = styled.div`
  position: absolute;
  width: ${(props) => props.screenWidth - 25 + "px"};
  min-width: 220px;
  height: 531px;
  border-radius: 20px 20px 0 0;
  margin: 279px 0 0 0;
  background: #FFFFFF;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
`

const MainScreenDateDisplay = styled.div`
  position: absolute;
  width: 208px;
  height: 17px;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #999999;
  margin: 18px 0 0 5px;
`

const MainScreenSearchCityButton = styled.div`
  position: absolute;
  width: 154px;
  height: 48px;
  border: none;
  border-radius: 0 20px 0 20px;
  background: rgba(13, 159, 234, 0.08);
  color: #0DA0EA;
  margin-left: ${(props) => props.screenWidth - 179 + "px"};
  cursor: pointer;
`

const SearchCityButtonLabel = styled.div`
  position: absolute;
  width: 113px;
  height: 19px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin: 16px 0 0 5px;
  overflow: hidden;
`

const SearchCityButtonImg = styled.img`
  position: absolute;
  width: 10px;
  height: 12px;
  margin: 18px 0 0 125px;
`

export default function MainScreenPanel(props) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const formattedDate = format(currentDate, 'EEEE, dd MMM yyyy | h:mmaa')
    const selectedLocation = useSelector(getSelectedLocation)
    const screenWidth = useSelector(getScreenWidth)

    const refreshDateDisplay = () => {
        setCurrentDate(new Date())
    }

    useEffect(() => {
        setInterval(
            () => refreshDateDisplay(),
            1000
        )
    }, [])

    return (
        <MainScreenPanelContainer screenWidth={screenWidth}>
            <MainScreenDateDisplay>{formattedDate}</MainScreenDateDisplay>
            <MainScreenSearchCityButton screenWidth={screenWidth} onClick={props.openSearch}>
                <SearchCityButtonLabel>{selectedLocation}, Slovakia</SearchCityButtonLabel>
                <SearchCityButtonImg src={iconblue} alt={"geoicon"}/>
            </MainScreenSearchCityButton>
            <TopWeatherRow
                weather={props.weatherData.weather}
                temperature={props.weatherData.temp}
                tempMin={props.weatherData.tempMin}
                tempMax={props.weatherData.tempMax}
            />
            <MainScreenPanelWeatherRow
                topMargin={"189px"}
                icons={[humidityIcon, pressureIcon, windIcon]}
                values={
                    [
                        (props.weatherData.humidity || "??") + "%",
                        (props.weatherData.pressure || "??") + "mBar",
                        (props.weatherData.windSpeed || "??") + "km/h"]
                }
                labels={["Humidity", "Pressure", "Wind"]}
            />
            <MainScreenPanelWeatherRow
                topMargin={"298px"}
                icons={[sunsetIcon, sunriseIcon, daytimeIcon]}
                values={
                    [
                        props.weatherData.sunrise || "??",
                        props.weatherData.sunset || "??",
                        props.weatherData.daytime || "??"]
                }
                labels={["Sunrise", "Sunset", "Daytime"]}
            />
            <MainScreenPanelFutureWeatherRow
                currentDate={currentDate}
                minTemps={[
                    props.weatherData.tempMin1 || "??",
                    props.weatherData.tempMin2 || "??",
                    props.weatherData.tempMin3 || "??"
                ]}
                maxTemps={[
                    props.weatherData.tempMax1 || "??",
                    props.weatherData.tempMax2 || "??",
                    props.weatherData.tempMax3 || "??"
                ]}
            />
        </MainScreenPanelContainer>
    )
}