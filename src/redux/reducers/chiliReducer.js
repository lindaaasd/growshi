import { produce } from "immer";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function chiliReducer(state = initialState.chilies, action) {
  const chilies = action.payload;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.CREATE_CHILI_SUCCESS: {
        draft.push(chilies);
        debugger;
        break;
      }
      case types.LOAD_CHILIES_SUCCESS: {
        draft.splice(0, draft.length, ...chilies);
        break;
      }
      case types.LOAD_CHILIES_BY_ID_SUCCESS: {
        draft.filter((chili) => chili.id === chilies.id);
        break;
      }
      case types.UPDATE_CHILI_SUCCESS: {
        const chiliIndex =
          draft.findIndex((chili) => chili.id === chilies.id) ?? -1;

        if (chiliIndex < 0) {
          draft.push(chilies);
        } else {
          draft.splice(chiliIndex, 1, chilies);
        }

        break;
      }
      case types.DELETE_CHILI_SUCCESS: {
        const chiliIndex =
          draft.findIndex((chili) => chili.id === chilies.id) ?? -1;

        if (chiliIndex > -1) {
          draft.splice(chiliIndex, 1);
        }

        break;
      }
    }
    return draft;
  });
}
