import { isNil } from "lodash";

const itemFromStorage = localStorage.getItem("cart");
//TODO:
//.isNil() method from lodash

export default {
  chilies: [],
  cart: isNil(itemFromStorage) ? [] : JSON.parse(itemFromStorage),
  pageNum: 0,
};
