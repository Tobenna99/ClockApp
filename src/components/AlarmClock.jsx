import React, { useState, useEffect } from "react";

const AlarmClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState(null);
  const [isAlarmOn, setIsAlarmOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      if (alarmTime !== null && currentTime.getTime() >= alarmTime.getTime()) {
        setIsAlarmOn(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTime, alarmTime]);

  const handleAlarmTimeChange = (e) => {
    const inputTime = new Date(e.target.value);
    setAlarmTime(inputTime);
    setIsAlarmOn(false);
  };

  const handleAlarmToggle = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  return (
    <div className="alarm-clock">
      <h2>Alarm Clock</h2>
      <div className="time-display">
        <span>{currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
      <div className="alarm-settings">
        <label htmlFor="alarm-time">Set alarm time:</label>
        <input type="datetime-local" id="alarm-time" name="alarm-time" onChange={handleAlarmTimeChange} />
        <button onClick={handleAlarmToggle}>{isAlarmOn ? "Turn off alarm" : "Turn on alarm"}</button>
      </div>
      {isAlarmOn && <p className="alarm-triggered">Alarm triggered at {alarmTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}!</p>}
    </div>
  );
};

export default AlarmClock;
