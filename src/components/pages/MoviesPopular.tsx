import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/dispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {FetchingPopular} from "../../Store/Reducer/ActionCreator";

import {NavLink} from "react-router-dom";


const MoviesPopular = () => {

    const dispatch = useAppDispatch()
    const {users, error, loading} = useAppSelector(state => state.MovieReducer)


    useEffect(() => {
        dispatch(FetchingPopular())
    }, [])

    if (loading) {
        return <h1>loading...</h1>
    }


    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className='container'>
            <div className='flex  flex-wrap justify-between'>
                {
                    users.map(el => (
                        <NavLink to={`movie/${el.id}`}>
                            <div className='m-4'>
                                <div>
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""
                                         className='w-[250px]' style={{cursor: 'pointer'}}/>
                                </div>
                                <h1 className='w-[200px]'>{el.title}</h1>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesPopular;