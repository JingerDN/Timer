
import React,{useState} from "react";

import './App.css';
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
const [time,setTime]=useState({hours:0,minutes:0,seconds:0});
const [interval,setIntrv]=useState();
const [status,setStatus]=useState(0);


const start=()=>{
  setStatus(1);
  run();
  setIntrv(setInterval(run,1000));
}

const stop=()=>{
clearInterval(interval);
setStatus(2);
}

const reset=()=>{
  clearInterval(interval);
  setStatus(0);
  setTime({hours:0,minutes:0,seconds:0})
}

const resume=()=>{
  setStatus(1);
  run();
  setIntrv(setInterval(run,1000));
}


let updatedHours=time.hours;
let updatedMinutes=time.minutes;
let updatedSeconds=time.seconds;

const run=()=>{
  if(updatedMinutes===60){
    updatedHours++;
    updatedMinutes=0;
}
if(updatedSeconds===60){
  updatedMinutes++;
  updatedSeconds=0;
}
updatedSeconds++;
return setTime({hours:updatedHours,minutes:updatedMinutes,seconds:updatedSeconds})

}
  return (
    <div className="App">
       <p>Starting test timer</p> 
      <Stopwatch time={time} start={start} status={status} stop={stop} reset={reset} resume={resume}/>
    </div>
  );
}

export default App;
