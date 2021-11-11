import {useEffect, useState} from 'react'
import MainScreenImg from '../components/MainScreenImg'
import MainScreenPanel from '../components/MainScreenPanel'
import SearchScreen from './SearchScreen'
import {requestAllLocationsWeatherData} from '../apiCalls'
import {useSelector} from 'react-redux'
import {getSelectedLocation} from '../reduxUtils'
import {locations} from '../constants'

export default function MainScreen() {
    const [searchOpened, setSearchOpened] = useState(false)
    const [locationWeatherData, setLocationWeatherData] = useState({})
    const selectedLocation = useSelector(getSelectedLocation)

    useEffect(() => {
        requestAllLocationsWeatherData(setLocationWeatherData).then(r => console.log(r))
    }, [])

    return (
        <div>
            <MainScreenImg/>
            <MainScreenPanel
                openSearch={() => setSearchOpened(true)}
                weatherData={locationWeatherData[selectedLocation] || {}}
            />
            <SearchScreen
                searchOpened={searchOpened}
                closeSearch={() => setSearchOpened(false)}
                weatherData={locationWeatherData}
            />
        </div>
    )
}