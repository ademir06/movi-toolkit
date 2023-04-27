import {AppDispatch} from "../store";
import axios from "axios";
import {movieFetching, movieFetchingError, movieFetchingSuccess, movieFetchingPage} from "./Movie";

const Apikey = '45d1d56fc54beedb6c0207f9ac6cab7c'


export const FetchingMovie = (page: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const responsive = await axios.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=${page}`)
            const {data} = responsive
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e = 'efsfghjfrfv'))
        }
    }
}

export const changeCurrentPage = (page: number) => {
    return async (dispatch: AppDispatch) => {
        dispatch(movieFetchingPage(page))
    }
}

