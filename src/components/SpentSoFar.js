import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { spentSoFar: state.spentSoFar };
};

export default connect(mapStateToProps)(function SpentSoFar({ spentSoFar }) {
  return (
    <div className="spentSoFarContainer">
      <h3>Spent so far:</h3>
      <h3 className="spentValue">{spentSoFar}</h3>
    </div>
  );
});
