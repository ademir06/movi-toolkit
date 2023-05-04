import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {useAppDispatch} from "../../hooks/dispatch";
import {useParams} from "react-router-dom";
import {MovieSearch} from "../../Store/Reducer/ActionCreator";
import {useAppSelector} from "../../hooks/useAppSelector";
import '../pages/Detail.scss'

const Search = () => {
    const dispatch = useAppDispatch()
    const [current, setCurrent] = useState(1)

    const {movieName} = useParams()

    const {Search} = useAppSelector((state) => state.MovieSearch)
    console.log(Search)
    useEffect(() => {
        dispatch(MovieSearch(current, movieName))
    }, [current, movieName])

    return (
        <div>
            <div id='movies'>
                <div className="container">
                    <div className="movies pt-20">
                        {
                            Search.map(el => <Card key={el.id} el={el}/>)
                        }
                    </div>
                </div>
                <div className='container'>
                    <div style={{
                        padding: '15% 0'
                    }}>
                        <h1>фильм который вы искали не найдено</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Search;