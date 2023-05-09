import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div class="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option vlaue="2020">2020</option>
          <option vlaue="2021">2021</option>
          <option vlaue="2022">2022</option>
          <option vlaue="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
