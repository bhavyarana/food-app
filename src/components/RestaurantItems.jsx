import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const RestaurantItems = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="res-items">
        <div className="res-items-content">
          <h3>
            {data?.card?.info?.name}-
            {data?.card?.info?.price / 100 ||
              data?.card?.info?.defaultPrice / 100}
          </h3>
          <p>{data?.card?.info?.description}</p>
        </div>
        <div className="res-items-image">
          <div
            className="add-item"
            onClick={() => {
              dispatch(addItem(data));
              console.log(data);
            }}
          >
            ADD+
          </div>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data?.card?.info?.imageId}`}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default RestaurantItems;
