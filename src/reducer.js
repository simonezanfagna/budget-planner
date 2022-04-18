export default function reducer(state, action) {
  /* console.log({ state, action });
  console.log(action.payload); */

  if (action.type === "ADDEXPENSE") {
    const newExpense = {
      ...action.payload,
      id: new Date().getTime().toString(),
    };
    let expenseClone = [...state.totalExpense];

    let totalSpent = parseFloat(state.spentSoFar);
    totalSpent += parseFloat(newExpense.costExpense);

    return {
      ...state,
      totalExpense: [...expenseClone, newExpense],
      spentSoFar: totalSpent.toFixed(2),
      remaining: parseFloat(state.budget - totalSpent).toFixed(2),
    };
  }
  if (action.type === "EDITBUDGET") {
    return {
      ...state,
      budget: parseFloat(action.payload.newBudget).toFixed(2),
      remaining: parseFloat(
        action.payload.newBudget - state.spentSoFar
      ).toFixed(2),
    };
  }
  if (action.type === "REMOVE") {
    const newTotalExpense = state.totalExpense.filter(
      (expense) => expense.id !== action.payload.id
    );
    let costExpense = parseFloat(action.payload.costExpense);
    let parseRemaining = parseFloat(state.remaining) + costExpense;
    return {
      ...state,
      totalExpense: newTotalExpense,
      spentSoFar: parseFloat(state.spentSoFar - costExpense).toFixed(2),
      remaining: parseFloat(parseRemaining).toFixed(2),
    };
  }
  return state;
}
