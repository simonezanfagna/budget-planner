import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { budget: state.budget };
};

export default connect(mapStateToProps)(function Budget({ budget, dispatch }) {
  const [showHide, setShowHide] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const refInput = useRef(null);

  const handleChange = (e) => {
    setNewBudget(e.target.value);
  };

  useEffect(() => {
    if (showHide === false) {
      dispatch({ type: "EDITBUDGET", payload: { newBudget } });
    } else {
      refInput.current.focus();
    }
  }, [showHide]);

  return (
    <div className="budegetContainer">
      <h3>Budget:</h3>
      {!showHide && <h3 className="budgetValue">{budget}</h3>}
      {showHide && (
        <input
          className="budgetEditInput"
          type="text"
          value={newBudget}
          onChange={handleChange}
          ref={refInput}
        ></input>
      )}
      <button className="budgetButton" onClick={() => setShowHide(!showHide)}>
        {!showHide && <i className="fa-solid fa-pen-to-square"></i>}
        {showHide && <i className="fa-solid fa-circle-check"></i>}
      </button>
    </div>
  );
});
