import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../../constants";

const useRestaurant = (resID) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resID);
    const json = await data.json();

    // console.log(json);
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
