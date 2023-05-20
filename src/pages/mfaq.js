import React from "react";
import Faq from "react-faq-component";
import "./design.css";
import question from "../icons/Group 817.svg";

export default function Mfaq() {
const data = {
  rows: [
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Est ut vulputate scelerisque nibh?",
      content: `Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada. `,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Donec at ut diam sit vitae gravida nisi?",
      content: `Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada. `,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Est ut vulputate scelerisque nibh?",
      content: `Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada. `,
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Est ut vulputate scelerisque nibh?",
      content: `Lorem ipsum dolor sit amet consectetur. Urna non sit non quisque. Mauris purus neque accumsan purus elementum. Proin faucibus in suspendisse malesuada. `,
    },
  ],
};
const styles = {
  titleTextColor: `#000B0C`,
  titleTextSize: "20px",
  titleFontWeight: "Bold",
  rowContentColor: `#000B0C`,
  rowContentTextSize: "16px",
  rowContentPaddingBottom: "42px",
  titlePaddingTop: "26px",
};
const config = {
  animate: true,
  arrowIcon: "+",
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};
    return (
      <div className="faq">
        <h1 className="frequent">Most Frequently Asked Questions</h1>
        <div className="freq">
          <Faq data={data} config={config} styles={styles} className="myFaq" />
        
        <img src={question} alt="faq" className="question"/></div>
      </div>
    );
}