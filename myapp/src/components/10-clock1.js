import React from 'react'
import moment from "moment";
import "../assets/css/10-clock1.css";


const Clock1 = () => {

    const dateTime = moment(); 
    const dateStr = dateTime.format('ll');
    const timeStr = dateTime.format('HH:mm');
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    let message = "";

    if(hour>=6 && hour<11){
        message = "Morning";
      }
      else if(hour>=11 && hour<17){
        message = "Afternoon";
      }
      else if(hour>=17 && hour<21){
        message = "Evening";
      }
      else{
        message = "Night";
      }
    



  return (
    <div className="clock-container">
    <div className="time">{timeStr}</div>
    <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
    </div>
  </div>
  )
}

export default Clock1