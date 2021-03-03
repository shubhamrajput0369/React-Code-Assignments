//Author: Shubham Bhagwansing Rajput
//CSS

import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

//Normal using react method

ReactDOM.render(<h1>Namaskar!</h1>,
   document.getElementById("root"));


//Javascript using Babel
//   "use strict";

   ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "Namaste!"), document.getElementById("root"));


//In Pure Javascript
   var h1 = document.createElement(h1);
   h1.innerHTML = "Hello, World!";
   document.getElementByID("root").appendChild(h1);
