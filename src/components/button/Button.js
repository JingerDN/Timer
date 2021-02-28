import React from "react";


export default function Button(props) {
  return (
      <div className="button">
      {(props.status===0)?( <div className="button">
        <button  onClick={props.start}>Start</button>
     </div>):null}

     {(props.status===1)?( <div><div className="button">
        <button  onClick={props.stop}>Stop</button>
    </div>
    <div className="button">
        <button  onClick={props.reset}>Reset</button>
    </div>
    </div>):null}

    {(props.status===2)?( <div><div className="button">
        <button  onDoubleClick={props.resume}>Resume</button>
    </div>
    <div className="button">
        <button  onClick={props.reset}>Reset</button>
    </div>
    </div>):null}
   
     </div>
  );
}