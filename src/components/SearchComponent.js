import {useState} from 'react'
import styled from 'styled-components'
import {locations} from '../constants'
import {useDispatch, useSelector} from 'react-redux'
import {setSelectedLocation, getScreenWidth} from '../reduxUtils'
import iconblack from '../assets/iconblack.png'

const StyledSearchComponentContainer = styled.div`
  position: absolute;
`

const StyledSearchCityInputContainer = styled.div`
  position: absolute;
  width: 335px;
  height: 40px;
  background: #F3F3F3;
  border: none;
  border-radius: 4px;
  margin-top: 74px;
  margin-left: ${(props) => (props.screenWidth / 2 - 168) + "px"};
  cursor: pointer;
`

const StyledSearchCityInput = styled.input`
  position: absolute;
  width: 280px;
  height: 22px;
  background: #F3F3F3;
  border: none;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #000000;
  margin: 9px 9px 0 15px;

  &::placeholder {
    font-style: italic;
    color: #9F9F9F;
  }

  &:focus {
    outline: none;
  }
`

const StyledSearchCityImg = styled.img`
  position: absolute;
  width: 12px;
  height: 16px;
  margin: 12px 0 0 308px;
`

const StyledCityListItemLabel = styled.div`
  position: absolute;
  width: 79px;
  height: 22px;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #444444;
`

const StyledCityListItemTemp = styled.div`
  position: absolute;
  width: 33px;
  height: 19px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
  text-align: right;
  margin-left: 272px;
  margin-top: 1px;
`

const StyledCityListItem = styled.div`
  position: absolute;
  height: 22px;
  font-family: Barlow;
  font-style: normal;
  margin-left: ${(props) => (props.screenWidth / 2 - 153) + "px"};
  margin-top: ${(props) => props.topMargin + "px"};
  cursor: pointer;
`

export default function SearchComponent(props) {
    const [filterValue, setFilterValue] = useState(null)
    const filteredLocations = !filterValue
        ? locations
        : locations.filter((location) => location.toLowerCase().includes(filterValue.toLowerCase()
        ))
    const dispatch = useDispatch()
    const screenWidth = useSelector(getScreenWidth)

    const pickLocation = (location) => {
        setFilterValue(null)
        dispatch(setSelectedLocation(location))
        props.closeSearch()
    }

    return (
        <StyledSearchComponentContainer>
            <StyledSearchCityInputContainer screenWidth={screenWidth}>
                <StyledSearchCityInput
                    placeholder={"Search city ..."}
                    onChange={(e) => {
                        setFilterValue(e.target.value)
                    }}
                />
                <StyledSearchCityImg src={iconblack} alt={"geoicon"}/>
            </StyledSearchCityInputContainer>
            {filteredLocations.map((location, idx) => (
                <StyledCityListItem
                    key={idx}
                    onClick={() => pickLocation(location)}
                    topMargin={148 + (idx * 28)}
                    screenWidth={screenWidth}
                >
                    <StyledCityListItemLabel>{location}</StyledCityListItemLabel>
                    <StyledCityListItemTemp>
                        {(props.weatherData[location] && props.weatherData[location].temp
                            ? props.weatherData[location].temp
                            : "??") + "°C"}
                    </StyledCityListItemTemp>
                </StyledCityListItem>
            ))}
        </StyledSearchComponentContainer>
    )
}