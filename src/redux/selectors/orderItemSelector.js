import { createSelector } from "reselect";

const slice = (state) => {
  debugger;
  return state?.cart;
};

export const selectAllOrderItems = createSelector([slice], (state) => {
  debugger;
  return state.map((c) => c);
});
