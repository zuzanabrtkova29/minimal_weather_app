import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
    screenWidth: null,
    screenHeight: null,
    selectedLocation: "Košice",
}

const minimalWeatherSlice = createSlice({
    name: 'minimal_weather',
    initialState,
    reducers: {
        changeScreenWidth: (state, action) => {
            state.screenWidth = action.payload;
        },
        changeScreenHeight: (state, action) => {
            state.screenHeight = action.payload;
        },
        setSelectedLocation: (state, action) => {
            state.selectedLocation = action.payload
        },
    },
})

export const {
    changeScreenWidth,
    changeScreenHeight,
    setSelectedLocation,
} = minimalWeatherSlice.actions

export const getScreenWidth = (state) => state.currentState.screenWidth
export const getScreenHeight = (state) => state.currentState.screenHeight
export const getSelectedLocation = (state) => state.currentState.selectedLocation

export const store = configureStore({
    reducer: {
        currentState: minimalWeatherSlice.reducer,
    },
})