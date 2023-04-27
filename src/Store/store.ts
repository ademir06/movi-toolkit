import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MovieReducer from './Reducer/MovieSlice'

import DetailReducer from './Reducer/DetailSlice'


const rootSate = combineReducers({
    MovieReducer,
    DetailReducer
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootSate
    })
}

export type rooState = ReturnType<typeof rootSate>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']