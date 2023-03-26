import React, { useState } from 'react';
import Clock from '../components/Clock';
import Alarm from '../components/Alarm';
import AlarmClock from '../components/AlarmClock';

function HomePage() {
  const [alarmTime, setAlarmTime] = useState(null);
  const [alarmActivated, setAlarmActivated] = useState(false);

  const handleActivateAlarm = (time) => {
    setAlarmTime(time);
    setAlarmActivated(true);
  };

  return (
    <div>
      <Clock />
      <Alarm onSetAlarm={handleActivateAlarm} />
      {alarmActivated && <AlarmClock alarmTime={alarmTime} />}
    </div>
  );
}

export default HomePage;
