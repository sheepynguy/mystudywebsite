import React, {useState} from 'react';
import StopWatch from './Stopwatch';
import CDTimer from './CDTimer';
import Todo_component from './Todo_list';
import './styling_components/Home.css';


export default function Home() {
    return (
        <div className='home-page'>
            <div className='stopwatch-component'><StopWatch/></div>
            <div className='timer-component'><CDTimer/></div>
            <div className='youtube-player'><iframe width="600" height="337.5" src="https://www.youtube.com/embed/videoseries?si=of0glbrc-p_Nwc4e&amp;list=PLKEWTGBnOKk1ON3BRLUoNarcaObhiLQ4F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div className='playlist'><iframe src="https://open.spotify.com/embed/playlist/5mmjzAYZ72Ze1VDVwDIqMx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>


            {/* We can come back to put this todo component back when we make space for the ambient sounds */}
            <div className='todo-component'><Todo_component/></div>
        </div>
    );
}
