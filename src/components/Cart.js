import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="ml-3 mt-5">
      <h1 className="font-bold text-3xl">Cart - {cartItems.length} items</h1>
      <button className="m-3 bg-slate-200" onClick={() => handleClearCart()}>
        Clear cart
      </button>
      <div className="flex flex-col">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
