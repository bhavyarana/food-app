import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResItemsTitle from "./ResItemsTitle";

const RestaurantPage = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(
      `https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6828082&lng=77.3121354&restaurantId=${resId}`,
      {
        headers: {
          "x-cors-api-key": "temp_8287db970449f74d6eac17be407804e4",
        },
      }
    );
    const json = await data.json();

    setResMenu(json?.data);
  };
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  const resTitles =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) => {
        return (
          res?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="restaurant-menu">
      <div className="restaurant-menu-container">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <p>
          {costForTwoMessage} , {avgRating}⭐
        </p>
        {resTitles.map((res) => {
          return (
            <ResItemsTitle key={resTitles?.card?.card?.title} data={res} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantPage;
