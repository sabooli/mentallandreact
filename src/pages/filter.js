import React, { useState } from "react";

const options = [
  { value: "option1", label: "Depression", category: "Category" },
  { value: "option2", label: "mental", category: "Category" },
  { value: "option3", label: "Unhealthy Eating", category: "Category" },
  {
    value: "option4",
    label: "Life Transitions, Relationship Difficulties",
    category: "Category",
  },
  { value: "option5", label: "Adjustment Issues", category: "Category" },
  { value: "option8", label: "Online Only", category: "Status" },
];

const Filter = () => {
   const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((v) => v !== value));
    }
  };

   const groups = options.reduce((accumulator, option) => {
     if (accumulator[option.category]) {
       accumulator[option.category].push(option);
     } else {
       accumulator[option.category] = [option];
     }
     return accumulator;
   }, {});  

  return (
    <div className="box">
      <div className="filter">Filters</div>
      {Object.entries(groups).map(([category, options]) => (
        <div key={category}>
          <h2 className="title">{category}</h2>
          {options.map((option) => (
            <label key={option.value} className="labell">
              <input
                type="checkbox"
                value={option.value}
                checked={checkedValues.includes(option.value)}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
