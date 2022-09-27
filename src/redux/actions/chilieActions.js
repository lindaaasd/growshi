import * as types from "./actionTypes";
import * as chiliApi from "../../api/chiliApi";

export function loadChiliesSuccess(chilies) {
  return { type: types.LOAD_CHILIES_SUCCESS, payload: chilies };
}

const loadChilies = () => (dispatch) =>
  new Promise((resolve, reject) => {
    chiliApi
      .getChilies()
      .then((chilies) => {
        dispatch(loadChiliesSuccess(chilies));
        resolve();
      })
      .catch(reject);
  });

// const add = (cartItem) => {
//   // const { orderItem, requestedQuantity } = cartItem;
//   return (dispatch) =>
//     new Promise((resolve, reject) => {
//       try {
//         dispatch(addOrderItemSuccess(cartItem));
//         resolve();
//       } catch (error) {
//         reject(error);
//       }
//     });
// };

export default loadChilies;
