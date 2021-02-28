import React from "react";

export default function DisplayComponent(props) {
  return (
    <div className="display">
        <span>{(props.time.hours<10)?("0"+props.time.hours):(props.time.hours)}</span>&nbsp;:&nbsp;
        <span>{(props.time.minutes<10)?("0"+props.time.minutes):(props.time.minutes)}</span>&nbsp;:&nbsp;
        <span>{(props.time.seconds<10)?("0"+props.time.seconds):(props.time.seconds)}</span>&nbsp;
    </div>
  );
}

