import React, { useState } from "react";
import "./index.css";

export default function Explain(props) {
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
          {props.data.map((doctor) => (
            <tr key={doctor.name} className="exp">
              {activeButton === 0 && (
                <>
                  <td>{doctor.about}</td>
                  <td></td>
                  <td></td>
                </>
              )}
              {activeButton === 1 && (
                <>
                  <td></td>
                  <td>{doctor.comments}</td>
                  <td></td>
                </>
              )}
              {activeButton === 2 && (
                <>
                  <td></td>
                  <td></td>
                  <td>{doctor.weeklyPlan}</td>
                </>
              )}
            </tr>
          ))}
        </div>
      </section>
    </div>
  );
}
