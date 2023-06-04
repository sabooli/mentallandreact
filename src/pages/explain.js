import React, { useState } from "react";

export default function Explain() {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div>
      <section className="knowing">
        {" "}
        <div className="knowme">
          <span
            className={activeButton === 0 ? "active aboutme" : "aboutme"}
            onClick={() => handleButtonClick(0)}
          >
            <span className="tx">About me</span>
          </span>
          <span
            className={activeButton === 1 ? "active comments" : "comments"}
            onClick={() => handleButtonClick(1)}
          >
            <span className="tx">Comments</span>
          </span>
          <span
            className={activeButton === 2 ? "active weeklyplan" : "weeklyplan"}
            onClick={() => handleButtonClick(2)}
          >
            <span className="tx">Weekly Plan</span>
          </span>
        </div>
        <div className="explain">
       
        </div>
      </section>
    </div>
  );
}
