import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {getScreenWidth} from '../reduxUtils'

const StyledWeatherRow = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: 69px;
  margin-top: ${(props) => props.topMargin};
  margin-left: ${(props) => props.leftMargin};
`

const WeatherRowTileImg = styled.div`
  position: absolute;
  width: 24px;
  height: 36px;
  margin: 0 0 0 21px;
`
const WeatherRowTileValue = styled.div`
  position: absolute;
  width: 67px;
  height: 19px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #444444;
  margin: 36px 0 0 0;
`
const WeatherRowTileLabel = styled.div`
  position: absolute;
  width: 67px;
  height: 10px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #999999;
  margin: 59px 0 0 0;
`
const StyledWeatherRowTile = styled.div`
  position: absolute;
  width: 67px;
  height: 69px;
  margin-left: ${(props) => props.marginLeft};
`

export default function MainScreenPanelWeatherRow(props) {
    const screenWidth = useSelector(getScreenWidth)
    let rowWidth, spacing
    if (screenWidth > 1500) {
        rowWidth = 897
        spacing = 348
    } else if (screenWidth > 1000) {
        rowWidth = 577
        spacing = 188
    } else if (screenWidth > 500) {
        rowWidth = 377
        spacing = 88
    } else {
        rowWidth = 287
        spacing = 43
    }
    return (
        <StyledWeatherRow topMargin={props.topMargin} leftMargin={"41px"} width={rowWidth}>
            <StyledWeatherRowTile marginLeft={"0"}>
                <WeatherRowTileImg><img src={props.icons[0]} alt={"weather_item_icon"}/></WeatherRowTileImg>
                <WeatherRowTileValue>{props.values[0]}</WeatherRowTileValue>
                <WeatherRowTileLabel>{props.labels[0]}</WeatherRowTileLabel>
            </StyledWeatherRowTile>
            <StyledWeatherRowTile marginLeft={67 + spacing + "px"}>
                <WeatherRowTileImg><img src={props.icons[1]} alt={"weather_item_icon"}/></WeatherRowTileImg>
                <WeatherRowTileValue>{props.values[1]}</WeatherRowTileValue>
                <WeatherRowTileLabel>{props.labels[1]}</WeatherRowTileLabel>
            </StyledWeatherRowTile>
            <StyledWeatherRowTile marginLeft={134 + 2 * spacing + "px"}>
                <WeatherRowTileImg><img src={props.icons[2]} alt={"weather_item_icon"}/></WeatherRowTileImg>
                <WeatherRowTileValue>{props.values[2]}</WeatherRowTileValue>
                <WeatherRowTileLabel>{props.labels[2]}</WeatherRowTileLabel>
            </StyledWeatherRowTile>
        </StyledWeatherRow>
    )
}