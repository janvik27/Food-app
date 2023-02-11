import { useParams } from "react-router-dom";
import useRestaurant from "../utils/hooks/useRestaurant";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants.js";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  const params = useParams();
  console.log(params);
  const { resID } = params;

  const restaurant = useRestaurant(resID);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch(addItem("grapes"));
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div className="bg-gray-900 pl-12 pr-11 w-1/3 ">
        {/* <h1>Restaurant id : {resID}</h1> */}

        {/* IMAGE */}
        <img
          className="w-96 mt-16 mb-8 "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        {/* RESTAURANT NAME  */}
        <h2 className="text-3xl text-white ">{restaurant?.name}</h2>

        {/* CUISINES  */}
        <h2 className="text-[16px] text-slate-400 mt-1">
          {restaurant?.cuisines.join(", ")}
        </h2>

        {/* RESTAURANT AREA  */}
        <h3 className="text-slate-400 text-[16px] mt-1 ">
          {restaurant?.locality + ", " + restaurant?.area}
        </h3>

        <div className="mt-11 flex justify-between w-auto pr-2">
          {/* RATING  */}
          <div className="flex flex-col pr-[35px] border-r-2 border-gray-600">
            <div className=" text-sm font-bold text-slate-400 self-center">
              {"⭐ " + restaurant?.avgRating}
            </div>
            <div className=" text-sm text-slate-400 self-center">
              {restaurant?.totalRatingsString}
            </div>
          </div>

          {/* DELIVERY TIME  */}
          <div className="flex flex-col pr-[35px] border-r-2 border-gray-600">
            <div className="text-sm font-bold text-slate-400 self-center">
              {restaurant?.sla.slaString}
            </div>
            <div className="text-sm text-slate-400 self-center">
              {"Delivery time"}
            </div>
          </div>

          {/* COST MSSG  */}
          <div className="flex flex-col ">
            <div className="text-sm font-bold text-slate-400 self-center">
              {"₹" + restaurant?.costForTwo / 100}
            </div>
            <div className="text-sm text-slate-400 self-center">
              {"Cost for two"}
            </div>
          </div>
        </div>
      </div>

      {/* restaurant.menu.items => object of key-value pairs
      we want the values of that object, so we write Object.values(restaurant.menu.items) */}
      {/* <div>{console.log(Object.values(restaurant.menu.items))}</div> */}

      <div className="bg-blue-50/5 ml-14 mt-10 ">
        <h1 className="font-bold text-lg">Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>
              <div className="mt-10">
                <span>{item?.name}</span>
                <button
                  className="ml-10 border border-solid border-black w-20"
                  onClick={() => handleAddItem(item)}
                >
                  Add item
                </button>
                {/* {console.log(Object.keys(item.variantsV2))} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
