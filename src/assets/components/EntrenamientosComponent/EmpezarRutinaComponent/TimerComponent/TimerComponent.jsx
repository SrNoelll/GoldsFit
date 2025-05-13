import React, { useEffect, useState } from 'react';
import './TimerComponent.css'
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  const pad = (num) => num.toString().padStart(2, '0');

  return (
    <div className='col-12 row d-flex justify-content-center align-items-center'>
        <div class="loader">
        <span class="hour"></span>
        <span class="min"></span>
        <span class="circel"></span>
        </div>
      <h4 id='timerPrin' className='titulo col'>{formatTime(seconds)}</h4>
    </div>
  );
}

export default Timer;
