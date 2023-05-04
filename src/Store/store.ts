import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MovieReducer from './Reducer/MovieSlice'
import DetailReducer from './Reducer/DetailSlice'
import ActorsReducer from './Reducer/Actors'
import MovieSearch from './Reducer/Search'
import ActorsDetailSlice from "./Reducer/ActorDetail";
import VideoSlice from './Reducer/VideoSlice'
import MovieDetail from './Reducer/DetailMovie'

const rootSate = combineReducers({
    MovieReducer,
    DetailReducer,
    ActorsReducer,
    MovieSearch,
    ActorsDetailSlice,
    VideoSlice,
    MovieDetail
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootSate
    })
}

export type rooState = ReturnType<typeof rootSate>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']