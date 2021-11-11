import styled from 'styled-components'
import iconweather from '../assets/iconweather.png'
import arrowUp from '../assets/arrowUp.png'
import arrowDown from '../assets/arrowDown.png'
import {useSelector} from 'react-redux'
import {getScreenWidth} from '../reduxUtils'

const TopWeatherRowContainer = styled.div`
  position: absolute;
  width: 352px;
  height: 77px;
  margin: 72px 0 0 45px;
`

const WeatherTileValue = styled.div`
  position: absolute;
  width: 60px;
  height: 22px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
  margin: 39px 0 0 0;
`

const WeatherTileImg = styled.div`
  position: absolute;
  width: 60px;
  height: 39px;
  padding: 5px 0 0 10px;
`

const StyledWeatherTile = styled.div`
  position: absolute;
  width: 87px;
  height: 61px;
  margin: 10px 0 0 0;
`
const TemperatureTileValue = styled.div`
  position: absolute;
  width: 62px;
  height: 77px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  line-height: 77px;
  letter-spacing: -0.05em;
  color: #000000;
`

const TemperatureTileLabel = styled.div`
  position: absolute;
  width: 24px;
  height: 29px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #666666;
  margin: 11px 0 0 63px;
`

const StyledTemperatureTile = styled.div`
  position: absolute;
  width: 87px;
  height: 77px;
  margin-left: ${(props) => props.leftMargin + "px"};
`
const TempVariationTileArrow = styled.div`
  position: absolute;
  width: 5px;
  height: 8px;
  margin-left: 34px;
  margin-top: ${(props) => props.topMargin};
`

const TempVariationTileValue = styled.div`
  position: absolute;
  width: 38px;
  height: 19px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  margin-top: ${(props) => props.topMargin};
`

const StyledTempVariationTile = styled.div`
  position: absolute;
  width: 87px;
  height: 50px;
  margin-top: 17px;
  margin-left: ${(props) => props.leftMargin + 25 + "px"};
`

export default function TopWeatherRow(props) {
    const screenWidth = useSelector(getScreenWidth)
    let rowWidth, spacing
    if (screenWidth > 1500) {
        rowWidth = 909
        spacing = 324
    } else if (screenWidth > 1000) {
        rowWidth = 592
        spacing = 164
    } else if (screenWidth > 500) {
        rowWidth = 389
        spacing = 64
    } else {
        rowWidth = 309
        spacing = 24
    }
    return (
        <TopWeatherRowContainer width={rowWidth}>
            <StyledWeatherTile>
                <WeatherTileImg><img src={iconweather} alt={"iconweather"}/></WeatherTileImg>
                <WeatherTileValue>{props.weather || "??"}</WeatherTileValue>
            </StyledWeatherTile>
            <StyledTemperatureTile leftMargin={87 + spacing}>
                <TemperatureTileValue>{props.temperature || "??"}</TemperatureTileValue>
                <TemperatureTileLabel>°C</TemperatureTileLabel>
            </StyledTemperatureTile>
            <StyledTempVariationTile leftMargin={174 + 2 * spacing}>
                <TempVariationTileValue topMargin={"0"}>{props.tempMax || "??"}°C</TempVariationTileValue>
                <TempVariationTileArrow topMargin={"-4px"}><img src={arrowUp} alt={"arrowUp"}/></TempVariationTileArrow>
                <TempVariationTileValue topMargin={"31px"}>{props.tempMin || "??"}°C</TempVariationTileValue>
                <TempVariationTileArrow topMargin={"30px"}>
                    <img src={arrowDown} alt={"arrowDown"}/>
                </TempVariationTileArrow>
            </StyledTempVariationTile>
        </TopWeatherRowContainer>
    )
}