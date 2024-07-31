import React, {useState, useEffect} from 'react';
import useSound from 'use-sound';
import './styling_components/CDTimer.css';
import alarm from './styling_components/timer_alarm.mp3';

function Timer() {
    const [timer, setTimer] = useState(0);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState();   // utilizes the Date library, which will give us a more accurate rendering of the time compared to just only relying on setInterval, which had previously messed up the rendering
    const [isRunning, setRunning] = useState(false);
    const [buttonDisplay, setDisplay] = useState("show-button");
    const [done, setDone] = useState(false);
    const [alarmSound, {stop}] = useSound(alarm, {volume: 0.5});

    var hours = Math.floor(timer/3600);
    var minutes = Math.floor((timer%3600)/60);
    var seconds = Math.floor(timer%60);

    const addHours = () => {setTimer(hours + 1 == 11 ? timer - 36000 : timer + 3600);}
    const subHours = () => {setTimer(hours - 1 < 0 ? timer + 36000 : timer - 3600);}
    const addMinutes = () => {setTimer(minutes + 1 == 60 ? timer - 3540 : timer + 60);}
    const subMinutes = () => {setTimer(minutes - 1 < 0 ? timer + 3540 : timer - 60);}
    const addSeconds = () => {setTimer(seconds + 1 == 60 ? timer - 59 : timer + 1);}
    const subSeconds = () => {setTimer(seconds - 1 < 0 ? timer + 59 : timer - 1);}

    useEffect(() => {
        let timer1;
        if(isRunning && timer > 0){
            timer1 = setInterval(() => {
                setTimer((timer) => time - Math.floor( (Date.now() - start) / 1000));
            },  100);
            return () => clearInterval(timer1);
        }
        else{
            if(isRunning){alarmSound();}
            setRunning(false);
            setDisplay("show-button");
            return;
        }
    }, [isRunning, timer, alarmSound, start, time])

    // when I change the running status, I should change the display status for the adjust-time buttons too, since that makes it easier for me to adjust the time
    const changeRunning = () => {
        setRunning(!isRunning);
    }

    const resetTimer = () => {
        setRunning(false);
        setTimer((timer) => 0);
    }

    const doneTimer = () => {
        stop();
    }



    return (
        <div className='timer'>
            <div className='clock-face'>
                <div className='clock-piece'>
                    {/* Rotate the symbols so that they are pointing the right way, and then align it column wise */}
                    <button className={buttonDisplay} onClick={addHours}><p className='arrow'>&#10096;</p></button>
                    {("0" + hours.toString()).slice(-2)}:
                    <button className={buttonDisplay} onClick={subHours}><p className='arrow'>&#10097;</p></button>
                </div>
                <div className='clock-piece'>
                    <button className={buttonDisplay} onClick={addMinutes}><p className='arrow'>&#10096;</p></button>
                    {("0" + minutes.toString()).slice(-2)}:
                    <button className={buttonDisplay} onClick={subMinutes}><p className='arrow'>&#10097;</p></button>
                </div>
                <div className='clock-piece'>
                    <button className={buttonDisplay} onClick={addSeconds}><p className='arrow'>&#10096;</p></button>
                    {("0" + seconds.toString()).slice(-2)}
                    <button className={buttonDisplay} onClick={subSeconds}><p className='arrow'>&#10097;</p></button>
                </div>
            </div>
            <div className='timer-buttons'>
                <button className='button' onClick={() => {
                    setRunning(true);
                    setStart(Date.now());
                    setTime(timer);
                    setDisplay("hide-button");
                }}>Start</button>
                <button className='button' onClick={changeRunning}>
                    Pause
                </button>
                <button className='button' onClick={resetTimer}>Reset</button>
                <button className='button' onClick={doneTimer}>Done</button>
            </div>
        </div>
    );
}

export default Timer;