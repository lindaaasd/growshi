import * as types from "./actionTypes";
import * as chiliApi from "../../api/chiliApi";

export function createChiliSuccess(chili) {
  return { type: types.CREATE_CHILI_SUCCESS, payload: chili };
}

export function updateChiliSuccess(chili) {
  return { type: types.UPDATE_CHILI_SUCCESS, payload: chili };
}

export function deleteChiliSuccess(chiliId) {
  return { type: types.DELETE_CHILI_SUCCESS, payload: chiliId };
}

export function loadChiliesByIdSuccess(chili) {
  return { type: types.LOAD_CHILIES_BY_ID_SUCCESS, payload: chili };
}

export function loadChiliesById(chiliId) {
  return function (dispatch) {
    debugger;
    return chiliApi
      .getChiliesById(chiliId)
      .then((recoveredChili) =>
        dispatch(loadChiliesByIdSuccess(recoveredChili))
      )
      .catch((error) => {
        throw error;
      });
  };
}

export function saveChili(chili) {
  return function (dispatch) {
    return chiliApi
      .saveChili(chili)
      .then((savedChili) => {
        chili.id
          ? dispatch(updateChiliSuccess(savedChili))
          : dispatch(createChiliSuccess(savedChili));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteChili(chiliId) {
  return function (dispatch) {
    return chiliApi
      .deleteChili(chiliId)
      .then(dispatch(deleteChiliSuccess(chiliId)))
      .catch((error) => {
        throw error;
      });
  };
}
