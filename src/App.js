import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  let i = 0;
  const expenses = [
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
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseItem
        id={expenses[0].id}
        date={expenses[0].date}
        amount={expenses[0].amount}
        title={expenses[0].title}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[1].id}
        date={expenses[1].date}
        amount={expenses[1].amount}
        title={expenses[1].title}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[2].id}
        date={expenses[2].date}
        amount={expenses[2].amount}
        title={expenses[2].title}
      ></ExpenseItem>
      <ExpenseItem
        id={expenses[3].id}
        date={expenses[3].date}
        amount={expenses[3].amount}
        title={expenses[3].title}
      ></ExpenseItem>
    </div>
  );
}

export default App;
