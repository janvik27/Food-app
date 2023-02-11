import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useInternetStatus from "../utils/hooks/useInternetStatus.js";
import Shimmer from "./Shimmer.js";
import { RestaurantCard } from "./RestaurantCard.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const internetStatus = useInternetStatus();

  const { user, setuser } = useContext(UserContext);

  // API CALL
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9337824&lng=75.7891795&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (internetStatus == false)
    return <h1>🔴Offline. Please check your internet connection</h1>;

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="  my-5 p-5 flex justify-center ">
        <input
          className=" w-96 border-solid border border-gray-400 rounded-md px-2 py-1 focus:outline-none text-md"
          type="text"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className=" ml-5 bg-red-100 hover:bg-red-200 w-20 py-1 rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* USER CONTEXT  */}
        {/* <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setuser({
              name: e.target.value,
            });
          }}
        ></input> */}
      </div>
      <div className="flex flex-wrap justify-center mx-24 gap-x-8 gap-y-4">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant found</h1>
        ) : (
          filteredRestaurants.map((restaurantObj) => {
            return (
              <Link
                to={"/restaurant/" + restaurantObj.data?.id}
                key={restaurantObj.data?.id}
              >
                <RestaurantCard {...restaurantObj.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
