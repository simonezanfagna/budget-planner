import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

const mapStateToProps = (state) => {
  return { totalExpense: state.totalExpense };
};

export default connect(mapStateToProps)(function ExpenseList({ totalExpense }) {
  if (totalExpense.length === 0) {
    return <p>no expense</p>;
  }
  return (
    <ul>
      {totalExpense.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </ul>
  );
});
