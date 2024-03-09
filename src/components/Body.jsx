import React from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../utils/constants";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://proxy.cors.sh/" + URL, {
      headers: {
        "x-cors-api-key": "temp_8287db970449f74d6eac17be407804e4",
      },
    });
    const json = await data.json();
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const fliterList = () => {
    const filtered = list.filter((data) => {
      return data.info.avgRating > 4.2;
    });
    setFilteredList(filtered);
  };
  const searchList = (e) => {
    setSearch(e.target.value);
    const searched = list.filter((data) => {
      return data.info.name.toLowerCase().includes(search);
    });
    setFilteredList(searched);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>seems u r offline!! Check your internet connection.</h1>;
  return list === null ? (
    <Shimmer />
  ) : (
    <>
      <button className="filter-btn" onClick={fliterList}>
        Top Rated Restaurants
      </button>
      <input
        type="text"
        id="search-box"
        placeholder="Search Restaurant"
        value={search}
        onChange={searchList}
      />
      <div className="card-container">
        {filteredList.map((res) => {
          return (
            <Link
              to={`/Restaurant/${res.info.id}`}
              key={res.info.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Cards resData={res} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
