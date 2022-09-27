import { createSelector } from "reselect";

const slice = (state) => {
  return state?.chilies;
};
export const selectAllChilies = createSelector([slice], (state) => {
  return state;
});

export const selectLastChilies = createSelector(slice, (state) => {
  return state;
});

export const selectChiliById = createSelector(
  slice,
  (state) => (id) => state.find((c) => id === c.id)
);

export const selectRandomChili = createSelector(slice, (state) => {
  return state[Math.floor(Math.random() * 100) % state.length];
});

// export const selectChiliDetail = createSelector(
//   // [(st) => slice(st), (st, id) => id],
//   [(st, id) => ({ state: slice(st), id })],
//   ({ state, id }) => {
//     return state.find((c) => id === c.id);
//   }
// );
