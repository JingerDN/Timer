import React from "react";
import Button from "../button/Button";
import Display from "../display/Display";


export default function Stopwatch(props) {


  return (
    <div className="stopwatch wrapper">
        <Display time={props.time}/>
        <Button start={props.start} stop={props.stop} reset={props.reset} status={props.status} resume={props.resume}/>
    </div>
  );
}


