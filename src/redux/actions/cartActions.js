import * as types from "./actionTypes";

export function addOrderItemSuccess(cartItem) {
  return { type: types.ADD_ORDER_ITEM_SUCCESS, payload: cartItem };
}

export function removeOrderItemSuccess(cartItem) {
  return { type: types.REMOVE_ORDER_ITEM_SUCCESS, payload: cartItem };
}

export function decreaseQuantitySuccess(cartItem) {
  return { type: types.DECREASE_QUANTITY_SUCCESS, payload: cartItem };
}

export function increaseQuantitySuccess(cartItem) {
  return { type: types.INCREASE_QUANTITY_SUCCESS, payload: cartItem };
}

export function emptyCartSuccess() {
  return { type: types.EMPTY_CART_SUCCESS };
}

export function getTotalCartCostSuccess() {
  return { type: types.GET_TOTAL_COST_SUCCESS };
}

const add = (cartItem) => {
  // const { orderItem, requestedQuantity } = cartItem;
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(addOrderItemSuccess(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};

export const addToCart = (cartItem) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(add(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        const state = getState();
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    });
};

const removeItem = (cartItem) => {
  // const { orderItem, requestedQuantity } = cartItem;
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(removeOrderItemSuccess(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};

export const removeItemFromCart = (cartItem) => {
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(removeItem(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        const state = getState();
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    });
};

const decreaseQuantity = (cartItem) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(decreaseQuantitySuccess(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};

export const decreaseQuantityInCart = (cartItem) => {
  debugger;
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(decreaseQuantity(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        const state = getState();
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    });
};

const increaseQuantity = (cartItem) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(increaseQuantitySuccess(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};

export const increaseQuantityInCart = (cartItem) => {
  debugger;
  return (dispatch, getState) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(increaseQuantity(cartItem));
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        const state = getState();
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    });
};

const empty = () => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(emptyCartSuccess());
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};

export const emptyCart = () => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(empty());
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        localStorage.removeItem("cart");
      }
    });
};

export const getTotalCartCost = () => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      try {
        dispatch(getTotalCartCostSuccess());
        resolve();
      } catch (error) {
        reject(error);
      }
    });
};
