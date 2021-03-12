import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "Shubham Bhagwansing Rajput";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/350";
const img3 = "https://picsum.photos/300/350";
const links = "https://shubhamrajput0369.github.io";

ReactDOM.render(
   <>
      <h1 className="heading">My name is {name}</h1>
         <div className="img_div">
            <img src={img1} alt="Random 1"/>
            <a href= {links} target="_shubham">
               <img src={img2} alt="Random 2"/>
            </a>
            <img src={img3} alt="Random 3"/>  
         </div>
   </>,
   document.getElementById("root"));
