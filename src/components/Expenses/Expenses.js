import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Ui/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  // console.log(props.items);
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [expenses, setExpenses] = useState(props.items);
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // setExpenses(filteredExpenses); aafai dimag lako, birgo
  };
  // let expenseContent = <p>No Expenses Found!</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     //no need to write return here if you don't use curly braces
  //     <ExpenseItem
  //       key={expense.id}
  //       id={expense.id}
  //       date={expense.date}
  //       amount={expense.amount}
  //       title={expense.title}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {expenseContent} */}
      {/* {console.log(filteredExpenses)} */}
      <ExpensesList items={filteredExpenses} />
      {/* {[
        <ExpenseItem
          id={props.items[0].id}
          date={props.items[0].date}
          amount={props.items[0].amount}
          title={props.items[0].title}
        ></ExpenseItem>,
        <ExpenseItem
          id={props.items[1].id}
          date={props.items[1].date}
          amount={props.items[1].amount}
          title={props.items[1].title}
        ></ExpenseItem>,
        <ExpenseItem
          id={props.items[2].id}
          date={props.items[2].date}
          amount={props.items[2].amount}
          title={props.items[2].title}
        ></ExpenseItem>,
        <ExpenseItem
          id={props.items[3].id}
          date={props.items[3].date}
          amount={props.items[3].amount}
          title={props.items[3].title}
        ></ExpenseItem>,
      ]} */}
    </Card>
  );
};
export default Expenses;
