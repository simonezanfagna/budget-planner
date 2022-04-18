import React from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import { createStore } from "redux";
import reducer from "./reducer";

import { Provider } from "react-redux";

const initialStore = {
  totalExpense: [],
  budget: 0,
  spentSoFar: 0,
  remaining: 0,
};

const store = createStore(reducer, initialStore);

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="budgetPlanner">
          <h1 className="budgetPlannerTitle">My Budget Planner</h1>
          <div className="budgetPlannerContainerBox">
            <Budget />
            <Remaining />
            <SpentSoFar />
          </div>
          <ExpenseForm></ExpenseForm>
          <h2 className="budgetPlannerExpenseTitle">Expenses</h2>
          <ExpenseList></ExpenseList>
        </div>
      </div>
    </Provider>
  );
}

export default App;
