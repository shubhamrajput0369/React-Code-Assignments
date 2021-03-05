//Author: Shubham Bhagwansing Rajput
//ReactJS

import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Shubham";
const lname = "Rajput";

ReactDOM.render(
   <>
   <h1>{`Hello, World! My first name is ${fname} and last name is ${lname}.`}</h1>
   <p>{`Sum of 5+5 is ${5+5}`}</p>
   </>,
   document.getElementById("root")
   );
