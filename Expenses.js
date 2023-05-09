import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card.js";
import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}
export default Expenses;
