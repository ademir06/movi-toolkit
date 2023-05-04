import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/dispatch";
import {VideoSlice} from "../../Store/Reducer/ActionCreator";
import {useAppSelector} from "../../hooks/useAppSelector";

interface IVideoId {
    movieId: string | undefined
}

const Video = ({movieId}: IVideoId) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(VideoSlice(movieId, ))
    }, [])
    const {video} = useAppSelector((state) => state.VideoSlice)
    console.log(video)
    return (
        <div className='flex my-48 bg-green-200 py-20'>
            {
                video.slice(0, 4).map(el => (
                    <div>
                        <iframe className='mx-8' width="300" height="200"
                                src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                ))
            }
        </div>
    );
};

export default Video;