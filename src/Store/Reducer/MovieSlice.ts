import {IMovie} from "../../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMovieState {
    users: IMovie[],
    loading: boolean,
    error: string,
    page: number
}


const initialState: IMovieState = {
    users: [],
    loading: false,
    error: '',
    page: 1
}

export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        movieFetching(state) {
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.loading = false
            state.users = action.payload
            state.error = ''
        },
        movieFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.users = []
            state.error = action.payload
        },
        movieFetchingPage(state, action) {
            state.page = action.payload
        },
    }
})


export const {movieFetching, movieFetchingSuccess, movieFetchingError,movieFetchingPage} = MovieSlice.actions

export default MovieSlice.reducer


