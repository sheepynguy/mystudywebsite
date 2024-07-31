import React, {useState, useEffect} from 'react';
import './styling_components/Stopwatch.css';

function StopWatch() {
    const [totalSeconds, setSeconds]  = useState(0);    // this is the total number of seconds that is being tracked
    const [isRunning, setRunning] = useState(false);    // this indicates whether the stopwatch is actively running or not

    useEffect (() => {
        let watch_id;
        if(isRunning){
            // setInterval of incrementing the time
            watch_id = setInterval(() => {
                setSeconds((totalSeconds) => totalSeconds + 1);
            },  1000);
        }
        return () => clearInterval(watch_id);
    }, [isRunning, totalSeconds])

    var hours = Math.floor(totalSeconds/3600);
    var minutes = Math.floor((totalSeconds%3600)/60);
    var seconds = Math.floor(totalSeconds%60);

    const changeRunning = () =>{
        setRunning(!isRunning);

    }

    const resetTimer = () => {
        setSeconds( (totalSeconds) => 0);
    }

    const recordTime = () => {
        setRunning(false);
        setSeconds((totalSeconds) => 0);

        // The following is a test to check that it will spit out the right time when we pass it over to the database
        alert("You have ran the timer for: " + hours + "hrs " + minutes + "min " + seconds + "secs");
        //
    }

    return(
        <div className='stopwatch'>
            <div className='clock-display'>
                {("0" + hours.toString()).slice(-2)}:
                {("0" + minutes.toString()).slice(-2)}:
                {("0" + seconds.toString()).slice(-2)}
            </div>
            <div className='stopwatch-buttons'>       {/* Later on, I can create images for the buttons instead of using words, since words will probably take up a lot of space */}
                <button className='button' onClick={changeRunning}>Start</button>
                <button className='button' onClick={changeRunning}>Pause</button>
                <button className='button' onClick={resetTimer}>Reset</button>
                <button className='button' onClick={recordTime}>Finish</button>
            </div>
        </div>
    );

}

export default StopWatch;