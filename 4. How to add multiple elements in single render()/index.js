//Author: Shubham Bhagwansing Rajput
//CSS

import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

//First Method
ReactDOM.render(
   <div>
      <h1>Namaskar!</h1>
      <p>How are you?</p>  
   </div>,
   document.getElementById("root"));

//or

//Second Method
ReactDOM.render(
   [
      <h1>Namaskars!</h1>,
      <p>How are you all?</p>
   ],  
   document.getElementById("root"));
