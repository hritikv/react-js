import React, { useState } from "react";
import Expenses from "./components/EXPENSES/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    title: "Toilet-Paper",
    amount: 200,
    date: new Date(2022, 11, 24),
  },
  {
    id: "el2",
    title: "News-Paper",
    amount: 250,
    date: new Date(2021, 1, 4),
  },
  {
    id: "el3",
    title: "TV",
    amount: 9200,
    date: new Date(2020, 10, 20),
  },
  {
    id: "el4",
    title: "Car Insurance",
    amount: 2000,
    date: new Date(2022, 5, 6),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense=> {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"let's get started"),
  //   React.createElement(Expenses,{items:expenses})
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
