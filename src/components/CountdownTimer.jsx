// CountdownTimer.js
"use client"
import { useState, useEffect } from 'react';

const CountdownTimer = ({ onFinish }) => {
  const [stage, setStage] = useState('Ready');

  useEffect(() => {
    // Transition from "Ready" to countdown after 1 second
    const readyTimeout = setTimeout(() => {
      setStage('Countdown');
    }, 1000);

    // Countdown from 3 to 1
    let count = 3;
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setStage(count.toString());
        count--;
      } else {
        // Transition to "Go" after countdown finishes
        clearInterval(countdownInterval);
        setStage('Go');
        // Wait for 1 second before navigating or any other action
        const goTimeout = setTimeout(() => {
          onFinish();
        }, 1000);
        return () => clearTimeout(goTimeout);
      }
    }, 1000);

    return () => {
      clearTimeout(readyTimeout);
      clearInterval(countdownInterval);
    };
  }, [onFinish]);

  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold">
        {stage === 'Ready' && 'Ready'}
        {stage !== 'Ready' && stage !== 'Go' && 'Quiz starts in'} 
        {<br/>}
        {['3', '2', '1'].includes(stage) && stage}
        {stage === 'Go' && 'Go'}
      </h1>
    </div>
  );
};

export default CountdownTimer;