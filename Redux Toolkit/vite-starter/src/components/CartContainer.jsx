import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  return <div>CartContainer</div>;
};
export default CartContainer;
