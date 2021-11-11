import styled from 'styled-components'
import {format, addDays} from 'date-fns'
import sunnyIcon from '../assets/sunny.png'
import cloudyIcon from '../assets/cloudy.png'
import hazyIcon from '../assets/hazy.png'
import {useSelector} from 'react-redux'
import {getScreenWidth} from '../reduxUtils'

const StyledFutureWeatherRow = styled.div`
  position: absolute;
  width: ${(props) => props.width};
  height: 101px;
  margin-top: 391px;
  margin-left: ${(props) => props.leftMargin};
`

const FutureWeatherRowTileImg = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 16px 0 0 36px;
`

const FutureWeatherRowTileLabel = styled.div`
  position: absolute;
  width: 50px;
  height: 19px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;
  color: #444444;
  margin: 52px 0 0 22px;
`

const FutureWeatherRowTileValue = styled.div`
  position: absolute;
  width: 95px;
  height: 10px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 0.1em;
  color: #999999;
  margin: 75px 0 0 0;
`

const StyledFutureWeatherRowTile = styled.div`
  position: absolute;
  width: 95px;
  height: 101px;
  background: #FFFFFF;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-left: ${(props) => props.leftMargin + "px"};
`

export default function MainScreenPanelFutureWeatherRow(props) {
    const formattedFutureDate = (addedDays) => {
        return format(addDays(props.currentDate, addedDays), "EEE, dd")
    }
    const screenWidth = useSelector(getScreenWidth)
    let rowWidth, spacing
    if (screenWidth > 1500) {
        rowWidth = 925
        spacing = 320
    } else if (screenWidth > 1000) {
        rowWidth = 605
        spacing = 160
    } else if (screenWidth > 500) {
        rowWidth = 345
        spacing = 60
    } else {
        rowWidth = 325
        spacing = 20
    }

    return (
        <StyledFutureWeatherRow width={rowWidth + "px"} leftMargin={"25px"}>
            <StyledFutureWeatherRowTile leftMargin={0}>
                <FutureWeatherRowTileImg><img src={sunnyIcon} alt={"sunnyIcon"}/></FutureWeatherRowTileImg>
                <FutureWeatherRowTileLabel>{formattedFutureDate(1)}</FutureWeatherRowTileLabel>
                <FutureWeatherRowTileValue>
                    {props.maxTemps[0] + "°C " + props.minTemps[0] + "°C"}
                </FutureWeatherRowTileValue>
            </StyledFutureWeatherRowTile>
            <StyledFutureWeatherRowTile leftMargin={95 + spacing}>
                <FutureWeatherRowTileImg><img src={cloudyIcon} alt={"cloudyIcon"}/></FutureWeatherRowTileImg>
                <FutureWeatherRowTileLabel>{formattedFutureDate(2)}</FutureWeatherRowTileLabel>
                <FutureWeatherRowTileValue>
                    {props.maxTemps[1] + "°C " + props.minTemps[1] + "°C"}
                </FutureWeatherRowTileValue>
            </StyledFutureWeatherRowTile>
            <StyledFutureWeatherRowTile leftMargin={190 + 2 * spacing}>
                <FutureWeatherRowTileImg><img src={hazyIcon} alt={"hazyIcon"}/></FutureWeatherRowTileImg>
                <FutureWeatherRowTileLabel>{formattedFutureDate(3)}</FutureWeatherRowTileLabel>
                <FutureWeatherRowTileValue>
                    {props.maxTemps[2] + "°C " + props.minTemps[2] + "°C"}
                </FutureWeatherRowTileValue>
            </StyledFutureWeatherRowTile>
        </StyledFutureWeatherRow>
    )
}