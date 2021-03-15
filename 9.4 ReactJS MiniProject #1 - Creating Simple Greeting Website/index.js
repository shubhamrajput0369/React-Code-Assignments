import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const csspart = { }

let currDate = new Date();
currDate = currDate.getHours();
let greetings = " ";

if(currDate>1 && currDate<=12){
   greetings = "Good Morning";
   csspart.color = "green";
}
else if(currDate>12 && currDate<19){
   greetings = "Good Afternoon";
   csspart.color = "orange";
}
else{
   greetings = "Good Night";
   csspart.color = "black";
}

ReactDOM.render(
   <>
      <div>
        <h1 className="heading">Hello Sir, <span style={csspart}> {greetings} </span></h1>
      </div>
   </>,
   document.getElementById("root"));
