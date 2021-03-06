import React, { useState} from 'react';
import './index.css';

function Room() {
    let [isdark, islit] = React.useState(true);
    let brightness = isdark ? "Dark Side" : "The Light";
    let [clock , moveclock] = useState(0);

    return (
      <div className={`room ${brightness}`}>
        {" "}
        The room is {isdark? "lit":"Dark"}
        <br />
        <br />
        <button onClick={() =>  islit(!isdark)}>Switch to {brightness} </button>
        <br/> Temp : {clock}<br/>
        <button onClick={() =>{console.log("Counter arrow function");
                                moveclock(++clock);
                                }}>
                                Increase Temp  
        </button>
        <button onClick={() =>{console.log("Counter arrow function");
                                moveclock(--clock);
                                }}>
                                Decrease Temp
        </button>
      </div>
    );
  }

  export default Room;