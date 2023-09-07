import React, { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Explain( {data, comments} ) {
  const [activeButton, setActiveButton] = useState(0);
  const { t, i18n } = useTranslation();

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

   let content;
   if (activeButton === 0) {
     content = data.about_us;
   } else if (activeButton === 1) {
     content = comments.map((comment) => comment.answer_comment);
   } else if (activeButton === 2) {
     content = "Content for WeeklyPlan";
   }
  
  const activeClass = activeButton === 0 ? "active" : "";
  const activePlan = activeButton === 2 ? "active" : "";


  return (
    <div>
      <section className="knowing">
        {" "}
        <div className="knowme">
          <span
            className={
              activeClass +
              " " +
              (i18n.language === "fa" ? "persianMode" : "aboutme")
            }
            onClick={() => handleButtonClick(0)}
          >
            <span className="tx">{t("AboutMe")}</span>
          </span>
          <span
            className={activeButton === 1 ? "active comments" : "comments"}
            onClick={() => handleButtonClick(1)}
          >
            <span className="tx">{t("Comments")}</span>
          </span>
          <span
            className={
              activePlan +
              " " +
              (i18n.language === "fa" ? "rtlMode" : "weeklyplan")
            }
            onClick={() => handleButtonClick(2)}
          >
            <span className="tx">{t("WeeklyPlan")}</span>
          </span>
        </div>
        <div className="explain">
{content}
        </div>
      </section>
    </div>
  );
}
