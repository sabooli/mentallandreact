import React from "react";

export default function Position() {
    return (
      <div className="posbar">
        <div className="postitle">Graphic Designer</div>
        <div>Google</div>
        <div>Remote</div>
        <div className="postime">
          <span>Mon-Fri</span>
          <span>Full-Time</span>
          <span>$20-$30 An Hour</span>
        </div>
        <div className="posexp">
          -Lorem ipsum dolor sit amet consectetur. Urna tortor vitae sed nullam
          rutrum tortor. Sit at senectus diam eg
          <br />
          -Lorem ipsum dolor sit amet consectetur. Urna tortor
        </div>
        <div className="posfrom">
          <span>Today</span>
          <span className="origin">From USA</span>
        </div>
        <div>Mentallan related courses:</div>
        <div className="postime"><span>Graphic design</span> <span>Motion design</span></div>
      </div>
    );
}