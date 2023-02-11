import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, cloudinaryImageId, description, price }) => {
  return (
    <div className="w-[300px] border border-gray-400 m-3 ml-0">
      <img
        className="w-[100px] h-[100px]"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <h2 className="font-bold">{name}</h2>
      <h2>{description}</h2>
      <h2>{"₹ " + price / 100}</h2>
    </div>
  );
};

export default FoodItem;
