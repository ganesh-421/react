import "./App.css";
import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 13),
  },
];
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const fetchExpenseHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/expenses');
      if(!response.status === 200) {
        throw new Error("something went wrong");
      }
      const data = await response.json();

      for(const expense of data.expenses) {
        expense.title = expense.Title;
        expense.date = new Date(expense.created_at);
      }
      setExpenses(data.expenses);
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      setIsError("Could't fetch expenses...")
    }
  }
  const addExpenseHandler = async (expense) => {
    /**
     * will add expense along with the previous expenses
     * passing method inside setExpenses will ensure that the latest state is used
     */
    
    // setExpenses((prevExpenses) => {
    //   return [expense, ...prevExpenses];
    // });
    const response = await fetch("http://127.0.0.1:8000/api/store", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        'content-type': "application/json",
      }
    });
    const data = await response.json();
    fetchExpenseHandler();
  };
  useEffect(() => {
    fetchExpenseHandler();
  }, []);
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;
    </div>
  );
};


export default App;
