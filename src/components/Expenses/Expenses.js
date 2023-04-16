import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.items[0].id}
        date={props.items[0].date}
        amount={props.items[0].amount}
        title={props.items[0].title}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[1].id}
        date={props.items[1].date}
        amount={props.items[1].amount}
        title={props.items[1].title}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[2].id}
        date={props.items[2].date}
        amount={props.items[2].amount}
        title={props.items[2].title}
      ></ExpenseItem>
      <ExpenseItem
        id={props.items[3].id}
        date={props.items[3].date}
        amount={props.items[3].amount}
        title={props.items[3].title}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;
