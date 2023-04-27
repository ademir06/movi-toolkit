import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/dispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {FetchingPopular} from "../../Store/Reducer/FetchingMovie";

const MoviesPopular = () => {
    const dispatch = useAppDispatch()
    const {users, error, loading} = useAppSelector(state => state.MovieReducer)


    useEffect(() => {
        dispatch(FetchingPopular())
    }, [])
    return (
        <div className='container'>
            <div className='flex  flex-wrap justify-between'>
                {
                    users.map(el => (
                        <div className='m-4'>
                            <div>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""
                                     className='w-[250px]' style={{cursor: 'pointer'}}/>
                            </div>
                            <h1 className='w-[200px]'>{el.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesPopular;