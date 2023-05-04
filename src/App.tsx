import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import MoviesPopular from "./components/pages/MoviesPopular";
import TopRated from "./components/pages/TopRated";
import Movie from "./components/Movie";
import DetailPage from "./components/pages/DetailPage";
import NewPlaying from "./components/pages/NewPlaying";
import Search from "./components/pages/Search";
import ActorsDetail from "./components/pages/ActorsDetail";


function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const dark = () => {
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
            <Header dark={dark} isDarkMode={isDarkMode}/>
            <Routes>
                <Route path={'/'} element={<MoviesPopular/>}/>
                <Route path={'/TopRated'} element={<TopRated/>}/>
                <Route path={'/Now Playing'} element={<NewPlaying/>}/>
                <Route path={'/Upcoming'} element={<Movie/>}/>
                <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
                <Route path={'/Index/detail-cast/:castId'} element={<ActorsDetail/>}/>
                <Route path={'/movies/movie-search/:movieName'} element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
