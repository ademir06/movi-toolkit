import React from 'react';
import {IMovie} from "../../types/IMovie";
import {NavLink} from "react-router-dom";


interface ICard {
    el: IMovie
}
const Card = ({el}: ICard) => {

    return (
        <div className='m-4 border px-8 pt-5 h-[450px] text-center border-amber-950 bg-gray-600 text-white'>
            <NavLink to={`/movie/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt=""
                     className='w-[250px]' style={{cursor: 'pointer'}}/>
            </NavLink>
            <h1 className='w-[200px]'>{el.title}</h1>
        </div>
    );
};

export default Card;