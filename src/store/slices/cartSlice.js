import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload);
      const itemIndex = state.items.findIndex((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      if (itemIndex >= 0) {
        state.items[itemIndex].itemQuantity += 1;

        toast.info("Increased quanity", { position: "bottom-left" });
      } else {
        const tempItem = { ...action.payload, itemQuantity: 1 };
        state.items.push(tempItem);

        toast.success("Item added to cart", { position: "bottom-left" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const newCart = state.items.filter((item) => {
        return item.card.info.id !== action.payload.card.info.id;
      });
      state.items = newCart;
      localStorage.setItem("cartItems", JSON.stringify(state.items));

      toast.error("Item Removed", { position: "bottom-left" });
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      if (state.items[itemIndex].itemQuantity > 1) {
        state.items[itemIndex].itemQuantity -= 1;
      } else {
        const newCart = state.items.filter((item) => {
          return item.card.info.id !== action.payload.card.info.id;
        });
        state.items = newCart;

        toast.error("Item Removed", { position: "bottom-left" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    increaseItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => {
        return item.card.info.id === action.payload.card.info.id;
      });
      state.items[itemIndex].itemQuantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items.length = 0;

      toast.error("Cart Cleared", { position: "bottom-left" });
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, decreaseItem, increaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
