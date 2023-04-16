import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   commentd is next mathod
  /*const [userInout, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); 
  */
  //  two way binding
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
    /*setUserInput({
        ...userInput, (spread operator to save all the previous data)
        enteredTitle: event.target.value,
    })
    not safe:: the safer approach is::
    setUserInput((prevState) => {
        return {...prevState, enteredTitle:event.target.value}
        (it will ensure that the previous state is the latest state not older state)
    })
    */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput({
        ...userInput, (spread operator to save all the previous data)
        enteredAmount: event.target.value,
    })*/
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput({
        ...userInput, (spread operator to save all the previous data)
        enteredDate: event.target.value,
    })*/
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__control">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
