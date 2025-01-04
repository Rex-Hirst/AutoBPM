"use client";

import { useState, useEffect } from 'react';


const BPM = () => {
  const [clicks, setClicks] = useState([]);
  const [bpm, setBpm] = useState(0);

  const handleClick = () => {
    const now = Date.now();
    setClicks((prevClicks) => [...prevClicks, now]);
  };

  const handleReset = () => {
    setClicks([]);
    setBpm(0);
  };

  useEffect(() => {
    if (clicks.length > 1) {
      const intervals = clicks.slice(1).map((time, index) => time - clicks[index]);
      const averageInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      setBpm(Math.round(60000 / averageInterval));
    }
  }, [clicks]);
  return (
    <div className="container">
      <center>
      <h1>Auto<span className ="rainbowText">BPM</span></h1>
      <h2> Your automatic beats per minute calculator, try out now!</h2>
      <h3>Your BPM is:</h3>
      <h4>{bpm}</h4>
      <div id="spaceBlock"></div>
      <button id="click" onClick={handleClick}>Click Me</button>
      <div></div>
      <button id="reset" onClick={handleReset}>Reset</button>
      </center>
    </div>

  );
};

export default BPM;