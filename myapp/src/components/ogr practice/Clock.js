import React from 'react'
import moment from 'moment';
import"../ogr practice/clock.css";

const Clock12 = (props) => {
  const dateTime = moment();
  const timeStr= dateTime.format("HH:mm");
  const dateStr= dateTime.format("LL");
  const dayStr= dateTime.format("dddd")
  const hour= dateTime.format("HH");
  let message = "";

  if(hour>=6 && hour<18){
    message = "iyi Günler"
  }else{
    message = "iyi Geceler"

  }
  const renk={
    backgroundColor:props.bgColor,
    color:props.color}
  

  return (
    <div className='clock-container'>
        <div className="time" style={renk}>{timeStr}</div>
        <div>
          <div className="date">{dateStr}</div>
          <div className="day">{dayStr} {message}</div>
        </div>
    </div>
  )
}

export default Clock12