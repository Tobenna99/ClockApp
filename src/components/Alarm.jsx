import React, { useState } from 'react';

const Alarm = ({ onActivateAlarm }) => {
  const [alarmTime, setAlarmTime] = useState(null);

  const handleAlarmTimeChange = (e) => {
    const inputTime = new Date(e.target.value);
    setAlarmTime(inputTime);
  };

  const handleSetAlarmClick = () => {
    onActivateAlarm(alarmTime);
  };

  return (
    <div className="alarm">
      <h2>Alarm</h2>
      <div className="alarm-settings">
        <label htmlFor="alarm-time">Set alarm time:</label>
        <input type="datetime-local" id="alarm-time" name="alarm-time" onChange={handleAlarmTimeChange} />
        <button onClick={handleSetAlarmClick}>Set Alarm</button>
      </div>
    </div>
  );
};

export default Alarm;
