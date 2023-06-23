import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";



export default function Positioninfo({info}) {
  const { title, content } = info || {};
const [activeButton, setActiveButton] = useState(0);
const [context, setContext] = useState("Job Description");
  const [isFilled, setIsFilled] = useState(false);

   const handleClick = () => {
     setIsFilled(!isFilled);
   };


const handleButtonClick = (index) => {
  setActiveButton(index);
  if (index === 0) {
    setContext("Job Description");
  } else if (index === 1) {
    setContext("Company");
  } else if (index===2) {
    setContext("Other Opportunities");
  }
};

    return (
      <div className="posbar">
        <div className="postitleinfo">
          Graphic Designer{" "}
          <AiOutlineHeart
            onClick={handleClick}
            color={isFilled ? "red" : "black"}
            style={{ fontSize: 20 }}
          />
        </div>
        <div>Google</div>
        <div>Remote</div>
        <div className="postime">
          <span>Mon-Fri</span>
          <span>Full-Time</span>
          <span>$20-$30 An Hour</span>
          {title && <h3>{title}</h3>}
          {content && <p>{content}</p>}
        </div>
        <div className="applyorcancel">
          <Link to="" className="applyjob">
            Apply
          </Link>
          <Link to="" className="canceljob">
            Records
          </Link>
        </div>
        <div className="jobdetail text-center">
          <div>
            <span
              className={activeButton === 0 ? "alive" : ""}
              onClick={() => handleButtonClick(0)}
            >
              <span className="">Job Description</span>
            </span>
          </div>
          <div>
            {" "}
            <span
              className={activeButton === 1 ? "alive" : ""}
              onClick={() => handleButtonClick(1)}
            >
              <span className="">Company</span>
            </span>
          </div>
          <div>
            {" "}
            <span
              className={activeButton === 2 ? "alive" : ""}
              onClick={() => handleButtonClick(2)}
            >
              <span className="">Other Opportunities</span>
            </span>
          </div>
        </div>
        {context && <div className="mt-3">{context}</div>}
      </div>
    );
}