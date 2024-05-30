import { useState } from "react";
import RestaurantItems from "./RestaurantItems";
const ResItemsTitle = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className="res-items-container">
        <div className="res-items-title" onClick={handleClick}>
          <h3>
            {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
          </h3>
          <p>⬇️</p>
        </div>
        {data?.card?.card?.itemCards.map((res) => {
          return showItems === true ? <RestaurantItems data={res} /> : "";
        })}
      </div>
    </>
  );
};

export default ResItemsTitle;
