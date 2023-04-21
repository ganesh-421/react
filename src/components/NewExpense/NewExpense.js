import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // const expenseData = {
    //   ...enteredExpenseData,
    // };
    props.onAddExpense(enteredExpenseData);
  };
  const [click, setClick] = useState(false);
  const cancelHandler = () => {
    setClick(false);
  };
  if (click) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={() => setClick(true)}>Add New Expense</button>
    </div>
  );
};
export default NewExpense;
