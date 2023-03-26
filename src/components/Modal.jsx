import React from "react";
import "./Modal.css";

const Modal = ({ show, date }) => {
  const modalStyle = {
    display: show ? "block" : "none"
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Upcoming Event</h2>
        <p>This event is scheduled for {date.toLocaleString()}.</p>
      </div>
    </div>
  );
};

export default Modal;
