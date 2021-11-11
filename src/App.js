import {useEffect} from 'react'
import MainScreen from './screens/MainScreen'
import {useDispatch} from 'react-redux'
import {changeScreenWidth, changeScreenHeight} from './reduxUtils'
import WebFont from 'webfontloader'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions)
        WebFont.load({
            google: {
                families: ['Barlow']
            }
        })
    }, [])

    const updateDimensions = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        dispatch(changeScreenWidth(width))
        dispatch(changeScreenHeight(height))
    }

    return (
        <div className="App">
            <MainScreen/>
        </div>
    );
}

export default App;
