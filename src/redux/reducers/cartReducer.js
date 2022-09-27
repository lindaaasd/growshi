import { produce } from "immer";
import { isNil } from "lodash";
import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  const cartItem = action.payload;
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_ORDER_ITEM_SUCCESS: {
        const item = draft.find((item) => item.id === cartItem.orderItem.id);
        if (isNil(item)) {
          draft.push({
            ...cartItem.orderItem,
            cartQuantity: parseInt(cartItem.requestedQuantity),
          });
        } else {
          item.cartQuantity += cartItem.requestedQuantity;
        }
        break;
      }
      case types.REMOVE_ORDER_ITEM_SUCCESS: {
        const updatedCart = draft.filter((item) => item.id !== cartItem.id);
        return updatedCart;
      }
      case types.DECREASE_QUANTITY_SUCCESS: {
        debugger;
        const item = draft.find((item) => item.id === cartItem.id);
        if (!isNil(item) || item.cartQuantity > 1) {
          item.cartQuantity -= 1;
        } else if (item.cartQuantity === 1) {
          return draft.filter((item) => item.id !== cartItem.id);
        }
        return draft;
      }
      case types.INCREASE_QUANTITY_SUCCESS: {
        const item = draft.find((item) => item.id === cartItem.id);
        if (!isNil(item) && item.cartQuantity <= cartItem.stockQuantity) {
          item.cartQuantity += 1;
        }
        return draft;
      }
      case types.EMPTY_CART_SUCCESS: {
        return (draft = []);
      }
    }
  });
}
