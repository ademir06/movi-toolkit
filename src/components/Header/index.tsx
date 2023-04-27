import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className='bg-gray-900'>
                <div className='container'>
                    <nav className=" border-gray-200 dark:bg-gray-900">
                        <div className="max-w-screen-xl flex  items-center py-[30px]  mx-auto p-4">
                            <div className='flex items-center'>
                                <a href="#" className="flex items-center">
                                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3"
                                         alt="Flowbite Logo"/>
                                    <span
                                        className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
                                </a>
                                <input className='ml-[100px] py-[5px] px-[20px] outline-none rounded text-gray-600'
                                       type="text" placeholder='search'/>

                            </div>

                            <div
                                className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg   md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-[150px]">
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
                            <button className='bg-white ml-[70px] rounded px-5 py-2'>dark mode</button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
