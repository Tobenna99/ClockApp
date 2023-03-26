import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Clock.css";
import "./Modal.css";


const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventName, setEventName] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const isNight = hour >= 19 || hour < 7;
  const timeColor = isNight ? "#FFF" : "#FFFF00";
  const bgColor = isNight ? "#000" : "#000";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSaveEvent = () => {
    console.log(`Saved event: ${eventName}`);
    closeModal();
  };

  return (
    <div className="container" style={{ background: bgColor }}>
      <div className="clock">
        <TransitionGroup>
          <CSSTransition
            key={time.getMinutes()}
            classNames="slide-down"
            timeout={{ enter: 500, exit: 0 }}
          >
            <h1 className="time" style={{ color: timeColor }}>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h1>
          </CSSTransition>
        </TransitionGroup>
        <h2 className="date" style={{ color: timeColor }}>
          {time.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
        </h2>
        <button className="add-event-btn" onClick={openModal}>
          <i className="fas fa-plus"></i>
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h3>Add New Event</h3>
              <form>
                <label htmlFor="event-name">Event Name:</label>
                <input
                  type="text"
                  id="event-name"
                  name="event-name"
                  value={eventName}
                  onChange={handleEventNameChange}
                />
              </form>
              <div className="btn-container">
                <button className="save-btn" onClick={handleSaveEvent}>Save</button>
                <button className="cancel-btn" onClick={closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
