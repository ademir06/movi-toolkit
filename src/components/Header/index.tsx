import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {useAppDispatch} from "../../hooks/dispatch";
import {Language} from "../../Store/Reducer/ActionCreator";
import {useAppSelector} from "../../hooks/useAppSelector";

interface IDark {
    dark: any
    isDarkMode: boolean
}

const Header = ({dark, isDarkMode}: IDark) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const handleChange = (name: any) => {
        if (value.trim() !== '') {
            setValue('')
            navigate(`/movies/movie-search/${name}`)
        }
        setValue('')
    }

    const {language} = useAppSelector((state) => state.MovieReducer)
    console.log(language)
    const LanguageChange = (e: React.ChangeEvent<any>) => {
        dispatch(Language(e.target.value))
    }

    const getInputValue = (event: any) => {
        setValue(event.target.value)
    }


    return (
        <>
            <div className='bg-gray-900 fixed w-full  z-50  backdrop-blur-md '>
                <div className='container'>
                    <nav className=" border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex  items-center py-[30px]  mx-auto p-4">
                            <div className='flex items-center'>
                                <NavLink to={'/'} className="flex items-center">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3"
                                         alt="Flowbite Logo"/>
                                    <span
                                        className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
                                </NavLink>
                                <input value={value} onKeyDown={(e) => {
                                    switch (e.key) {
                                        case 'Enter':
                                            handleChange(value)
                                            break
                                    }
                                }}
                                       onChange={(event) => {
                                           getInputValue(event)
                                       }
                                       }
                                       className='ml-[100px] py-[5px] px-[20px] outline-none rounded text-gray-600'
                                       type="text" placeholder='search'/>
                                <button className='px-4 text-1xl' onClick={() => {
                                    setValue('')
                                    handleChange(value)
                                }}>
                                    <FaSearch
                                        className='text-white'/></button>

                            </div>

                            <div
                                className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[120px]">
                                <NavLink to={'/'}><p
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Popular</p>
                                </NavLink>
                                <NavLink to={'/TopRated'}><p
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Top
                                    Rated</p></NavLink>
                                <NavLink to={'/Upcoming'}><p
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Upcoming</p>
                                </NavLink>
                                <NavLink to={'/Now playing'}><p
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Now
                                    Playing</p></NavLink>
                            </div>
                            <button className='bg-white ml-[20px] rounded px-5 py-2 text-gray-900'
                                    onClick={dark}>{isDarkMode ? ' Light Mode' : ' Dark Mode'}</button>
                            <div className='bg-gray-600  text-gray-900 ml-[10px]'>
                                <select onChange={e => LanguageChange(e)}>
                                    <option value="en-US">en</option>
                                    <option value="ru-RU">ru</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
