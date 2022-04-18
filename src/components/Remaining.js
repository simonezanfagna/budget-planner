import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { remaining: state.remaining };
};

export default connect(mapStateToProps)(function Remaining({ remaining }) {
  return (
    <div
      className="remainingContainer"
      style={{ backgroundColor: remaining < 0 ? "#e6b8b8" : "#cee3ba" }}
    >
      <h3>Remaining:</h3>
      <h3 className="remainingValue">{remaining}</h3>
    </div>
  );
});
