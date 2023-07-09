import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";


export default function Position({ onClick }) {
                 return (
                   <div className="posbar mb-4">
                     <div className="postitle">Graphic Designer</div>
                     <div>Google</div>
                     <div>Remote</div>
                     <div className="postime">
                       <span>Mon-Fri</span>
                       <span>Full-Time</span>
                       <span>$20-$30 An Hour</span>
                     </div>
                     <div className="posexp">
                       -Lorem ipsum dolor sit amet consectetur. Urna tortor
                       vitae sed nullam rutrum tortor. Sit at senectus diam eg
                       <br />
                       -Lorem ipsum dolor sit amet consectetur. Urna tortor
                     </div>
                     <div className="posfrom">
                       <span>Today</span>
                       <span className="origin">From USA</span>
                     </div>
                     <div>Mentalland related courses:</div>
                     <div className="postime">
                       <span>Graphic design</span> <span>Motion design</span>
                       <Link
                         onClick={() => onClick()}
                         className="gotopos mt-sm-5 mt-md-0 text-center"
                       >
                         <HiArrowLongRight className="arrow" />
                       </Link>
                     </div>
                   </div>
                 );
               }