import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import MoviesPopular from "./components/pages/MoviesPopular";
import TopRated from "./components/pages/TopRated";
import Movie from "./components/Movie";
import DetailPage from "./components/pages/DetailPage";
import NewPlaying from "./components/pages/NewPlaying";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MoviesPopular/>}/>
                <Route path={'/TopRated'} element={<TopRated/>}/>
                <Route path={'/Now Playing'} element={<NewPlaying/>}/>
                <Route path={'/Upcoming'} element={<Movie/>}/>
                <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
