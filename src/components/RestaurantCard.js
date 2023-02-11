import { IMG_CDN_URL } from "../constants";

export const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  slaString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="p-4 w-64 h-80 border border-transparent shadow-md rounded-md hover:border hover:border-solid hover:border-gray-300 hover:shadow-lg hover:scale-105 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-md" />
      <h2 className="font-semibold text-[17px] mt-4">{name}</h2>
      <h3 className="truncate text-[13px] mt-1">{cuisines.join(", ")}</h3>
      <div>
        <h4 className="text-[12px] text-[#535665] mt-2">{slaString}</h4>
        <h4 className="text-[12px]  text-[#535665] mt-2">{costForTwoString}</h4>
        {/* <h4 className="text-[12px]  text-[#535665] mt-2">{avgRating}</h4> */}
        {/* <h5 className="font-bold">{user.name}</h5> */}
      </div>
    </div>
  );
};
