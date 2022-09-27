import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.css";
import Button from "../../style/Button.style";
import {
  removeItemFromCart,
  decreaseQuantityInCart,
  increaseQuantityInCart,
  emptyCart,
} from "../../redux/actions/cartActions";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteItem = (cartItem) => {
    dispatch(removeItemFromCart(cartItem));
    toast.success(`${cartItem.name} removed from cart`);
  };

  const handleDecrease = (cartItem) => {
    dispatch(decreaseQuantityInCart(cartItem));
  };

  const handleIncrease = (cartItem) => {
    dispatch(increaseQuantityInCart(cartItem));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  // useEffect(() => {
  //   dispatch(getTotalCartCost());
  // }, [cart]);

  const numItemsInCart = cart.reduce(
    (total, item) => total + parseInt(item.cartQuantity),
    0
  );
  let totalPriceCart = cart.reduce(
    (totalPrice, itemPrice) =>
      totalPrice + parseFloat(itemPrice.cartQuantity * itemPrice.price),
    0
  );

  return (
    <motion.section
      className="cart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty </p>
          <div className="start-shopping">
            <Link to="/shop">
              <span>
                <FontAwesomeIcon icon={faArrowLeftLong} /> Start shopping
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <h3> You have {numItemsInCart} chilies in the cart </h3>
          <div className="titles">
            <h3 className="product-title"> Product </h3>
            <h3 className="price"> Price </h3>
            <h3 className="quantity"> Quantity </h3>
            <h3 className="total"> Total </h3>
          </div>
          <div className="cart-items">
            {cart?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.imageUrl} alt={cartItem.name} />
                  <div>
                    <h3> {cartItem.name}</h3>
                    <button onClick={() => handleDeleteItem(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">€{cartItem.price} </div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecrease(cartItem)}> - </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncrease(cartItem)}> + </button>
                </div>
                <div className="cart-product-total-price">
                  €{cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart" onClick={() => handleEmptyCart()}>
              Empty cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">€ {totalPriceCart}</span>
              </div>
              <p> Taxes and shipping calculated at checkout </p>
              <Button> Checkout </Button>
              <div className="continue-shopping">
                <Link to="/shop">
                  <span>
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Continue shopping
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Cart;
