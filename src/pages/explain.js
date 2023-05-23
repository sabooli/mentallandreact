import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import Weeklyplan from "./weeklyplan";

export default function Explain() {    
  const [active, setActive] = useState("");
  const [text, setText] = useState("");
  function handleClick () {
    setActive(true);
  }; 
  function changeText() {
setText(<Weeklyplan />);
  }
 return (
   <section className="knowing">
     <div className="knowme">
       <button
         className={active ? "active col aboutme" : "col aboutme"}
         onClick={() => {
           handleClick();
           changeText();
         }}
       >
         <span className="tx">About me</span>
       </button>
       <button
         className={active ? "active col comments" : "col comments"}
         onClick={() => {
           handleClick();
         }}
       >
         <span className="tx">Comments</span>
       </button>
       <button
         className={active ? "active col weeklyplan" : "col weeklyplan"}
         onClick={handleClick}
       >
         <span className="tx">Weekly plan</span>
       </button>
     </div>
     <div className="explain">
       <span className="exp">{text}</span>
     </div>
   </section>
 );
}