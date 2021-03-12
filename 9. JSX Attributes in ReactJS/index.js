//Author: Shubham Bhagwansing Rajput
//C++
import React from "react";
import ReactDOM from "react-dom";

const name = "Shubham Bhagwansing Rajput";
const img1 = "http://webmeup.com/upload/blog/unnaturally-happy.png";
const img2 = "https://media.gettyimages.com/photos/aga-khan-palace-in-pune-india-picture-id93466728";
const img3 = "https://media.gettyimages.com/photos/business-district-in-pune-india-picture-id472046377";
const links = "https://shubhamrajput0369.github.io";

ReactDOM.render(
   <>
      <h1 contentEditable="true">My name is {name}</h1>
      <img src={img1} alt="Random 1"/>
      <a href= {links} target="_shubham">
         <img src={img2} alt="Random 2"/>
      </a>
      <img src={img3} alt="Random 3"/>  
   </>,
   document.getElementById("root"));
