import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  decreaseItem,
  increaseItem,
} from "../store/slices/cartSlice";
import { LuMinusCircle } from "react-icons/lu";
import { FiPlusCircle } from "react-icons/fi";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  let cartSubtotal = 0;

  return (
    <div className="cart">
      {cartItems.length == 0 && (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <button>
            <Link to={"/"} style={{ color: "red", textDecoration: "none" }}>
              {" "}
              Continue shopping...{" "}
            </Link>
          </button>
        </div>
      )}
      {cartItems.length !== 0 && (
        <>
          <h1>Cart Items</h1>
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((data) => {
                return (
                  <tr>
                    <td className="cart-content">
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.card?.info?.imageId}`}
                        alt="img"
                      />
                      <div>
                        <p>{data?.card?.info?.name}</p>
                        <button
                          onClick={() => {
                            dispatch(removeItem(data));
                          }}
                        >
                          {" "}
                          Remove{" "}
                        </button>
                      </div>
                    </td>
                    <td>
                      ₹
                      {data?.card?.info?.price / 100 ||
                        data?.card?.info?.defaultPrice / 100}
                    </td>
                    <td>
                      <div className="cart-quantity">
                        <span>
                          <LuMinusCircle
                            onClick={() => {
                              dispatch(decreaseItem(data));
                            }}
                          />
                        </span>
                        <p>{data.itemQuantity}</p>
                        <span>
                          <FiPlusCircle
                            onClick={() => {
                              dispatch(increaseItem(data));
                            }}
                          />
                        </span>
                      </div>
                    </td>
                    <td>
                      ₹
                      {(data?.card?.info?.price / 100 ||
                        data?.card?.info?.defaultPrice / 100) *
                        data.itemQuantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart-footer">
            <button
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              {" "}
              Clear Cart{" "}
            </button>
            <div className="cart-subtotal">
              <div className="cart-subtotal-price">
                <p>Subtotal</p>
                <p>
                  ₹
                  {/* {cartItems.reduce((acc, curVal) => {
                    return acc.itemQuantity + curVal.itemQuantity;
                  })} */}
                  {cartItems.map((item) => {
                    cartSubtotal +=
                      (item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100) * item.itemQuantity;
                  })}
                  {cartSubtotal}
                </p>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
