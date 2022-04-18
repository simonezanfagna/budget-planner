import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, costExpense } = ownProps;
  return {
    remove: () => dispatch({ type: "REMOVE", payload: { id, costExpense } }),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(function ExpenseItem({ id, nameExpense, costExpense, remove }) {
  return (
    <li className="budgetPlanner_expense">
      <span>{nameExpense}</span>
      <span>{costExpense}</span>
      <button onClick={() => remove()}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </li>
  );
});
