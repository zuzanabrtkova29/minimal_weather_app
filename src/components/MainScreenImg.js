import styled from 'styled-components'
import sky from '../assets/sky.png'
import {useSelector} from 'react-redux'
import {getScreenWidth} from '../reduxUtils'

const MainScreenImgWrapper = styled.img`
  position: absolute;
  margin: 0;
  width: ${(props) => props.width};
  max-width: 500px;
`

export default function MainScreenImg() {
    const screenWidth = useSelector(getScreenWidth)
    return (
        <MainScreenImgWrapper src={sky} alt={"sky"} width={screenWidth}/>
    )
}