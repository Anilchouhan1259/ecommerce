import { useSelector, useDispatch } from "react-redux";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.cart.data;
  });
  console.log(data);
  const renderedcart = data.map((product) => {
    return <CartList product={product} />;
  });
  return (
    <div className="md:flex">
      <div className="md:w-3/5">{renderedcart}</div>
      <div className="md:w-2/5">
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
