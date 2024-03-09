import React from "react";

const Cards = ({ resData }) => {
  return (
    <>
      <div className="card">
        <div className="card-box">
          <div className="card-img">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`}
              alt=""
            />
            <h2>
              {(resData?.info?.aggregatedDiscountInfoV3?.header || "") +
                " " +
                (resData?.info?.aggregatedDiscountInfoV3?.subHeader || "")}
            </h2>
          </div>
          <div className="card-content">
            <h3>{resData?.info?.name}</h3>
            <span>{resData?.info?.avgRating}⭐</span>
            <span> {`${resData?.info?.sla?.deliveryTime} Minutes`}⌚</span>
            <p>{resData?.info?.cuisines.join(", ")}</p>
            <p>{resData?.info?.areaName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
