import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export default connect()(function ExpenseForm({ dispatch }) {
  const [expense, setExpense] = useState({ nameExpense: "", costExpense: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADDEXPENSE", payload: expense });
    setExpense({ nameExpense: "", costExpense: "" });
  };

  return (
    <form className="budgetPlannerForm" onSubmit={handleSubmit}>
      <div className="formControlContainer">
        <div className="formControl">
          <label htmlFor="nameExpense">Name:</label>
          <input
            type="text"
            id="nameExpense"
            placeholder="name of the expense"
            name="nameExpense"
            value={expense.nameExpense}
            onChange={handleChange}
          />
        </div>

        <div className="formControl">
          <label htmlFor="costExpense">Cost:</label>
          <input
            type="text"
            placeholder="cost of the expense"
            id="costExpense"
            name="costExpense"
            value={expense.costExpense}
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit">Add Expense</button>
    </form>
  );
});
