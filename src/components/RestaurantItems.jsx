import React from "react";

const RestaurantItems = ({ data }) => {
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
