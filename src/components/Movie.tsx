import React, {useEffect} from 'react';
import {useAppDispatch} from "../hooks/dispatch";
import {useAppSelector} from "../hooks/useAppSelector";
import {changeCurrentPage, FetchingMovie} from "../Store/Reducer/FetchingMovie";

const Movie = () => {
    const dispatch = useAppDispatch()
    const {users, error, loading, page} = useAppSelector(state => state.MovieReducer)
    console.log(users)

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    // console.log(users)
    console.log(page)


    useEffect(() => {
        dispatch(FetchingMovie(page))
    }, [page])


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
            <div className='flex items-center justify-center mb-14'>
                {
                    pages.map(el => (
                        <button
                            className='border py-2 px-4 mx-4 mt-14'
                            onClick={() => changeCurrentPage(page)}>
                            {el}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default Movie;