import styled from 'styled-components'
import SearchComponent from '../components/SearchComponent'
import {useSelector} from 'react-redux'
import {getScreenWidth} from '../reduxUtils'

const StyledSearchScreen = styled.div`
  position: absolute;
  width: ${(props) => props.screenWidth - 25 + "px"};
  height: 781px;
  border-radius: 20px 20px 0 0;
  margin: 29px 0 0 0;
  background: #FFFFFF;
  box-shadow: 0px -16px 40px rgba(0, 0, 0, 0.2);
`
const StyledSearchScreenTitle = styled.div`
  position: absolute;
  width: 63px;
  height: 19px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #999999;
  margin-top: 28px;
  margin-left: ${(props) => (props.screenWidth / 2 - 31) + "px"};
  background: #FFFFFF;
`


export default function SearchScreen(props) {
    const screenWidth = useSelector(getScreenWidth)
    return (
        <StyledSearchScreen hidden={!props.searchOpened} screenWidth={screenWidth}>
            <StyledSearchScreenTitle screenWidth={screenWidth}>Location</StyledSearchScreenTitle>
            <SearchComponent weatherData={props.weatherData} closeSearch={props.closeSearch}/>
        </StyledSearchScreen>
    )
}