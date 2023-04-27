import React, {useEffect} from 'react';
import {AppDispatch} from "../../Store/store";
import {getDetailError, getDetailMovies, getDetailSuccess} from "../../Store/Reducer/DetailSlice";
import axios from "axios";
import {Apikey} from "../Apikey/apikey";
import {useAppDispatch} from "../../hooks/dispatch";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";


const DetailPage = () => {
    const dispatch = useAppDispatch()
    const {movieId} = useParams()
     const MovieDetail = () => {
        return async (dispatch: AppDispatch) => {
            try {
                dispatch(getDetailMovies())
                const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${Apikey}&language=en-US`)
                const {data} = responsive
                dispatch(getDetailSuccess(data.results))
            }catch (e: any){
                dispatch(getDetailError(e='error detail'))
            }
        }
    }
    const {error,loader,detail} = useAppSelector((state)=> state.DetailReducer)

    useEffect(()=> {
        dispatch(MovieDetail())
    },[])


    return (
        <div>
            {
                detail.map(el => (
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>
                        <h1 style={{
                            color: "black"
                        }}>{el.title}</h1>
                        <p  style={{
                            color: "black"
                        }}>{el.overview}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DetailPage;