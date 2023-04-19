import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    // alert("No Expenses Found");
    console.log("No Expenses Found");
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  //   console.log(props.items.map(expense=>expense.date));
  return props.items.map((expense) => {
    return (
      //or you simply can use () and ommit return keyword
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });
};
export default ExpensesList;
