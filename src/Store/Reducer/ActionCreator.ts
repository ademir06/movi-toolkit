import {AppDispatch} from "../store";
import axios from "axios";
import {movieFetching, movieFetchingError, movieFetchingSuccess, movieFetchingPage} from "./MovieSlice";
import {Apikey} from "../../components/Apikey/apikey";


export const ActionCreator = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingPopular = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=9`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingNewPlaying = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/now_playing?api_key=${Apikey}&language=en-US&page=1
`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}
export const FetchingRated = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${Apikey}&language=en-US&page=1`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}


