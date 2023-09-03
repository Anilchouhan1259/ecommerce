import { BiDollar } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { incrementItem, decrementItem } from "../store";
import { useDispatch } from "react-redux";
import { removeCart } from "../store";
const CartList = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementItem(product.id));
  };
  const handleDecrement = () => {
    dispatch(decrementItem(product.id));
  };
  const handleRemove = () => {
    console.log(product.id);
    dispatch(removeCart(product.id));
  };
  console.log("running");
  return (
    <div className="flex items-center mx-8 shadow-md my-3 rounded">
      <div className="flex w-2/4 rounded-lg ">
        <div className="my-2 mx-2 bg-gray-200 h-24 w-20 flex flex-shrink-0 justify-center overflow-hidden rounded-md">
          <img
            src={product.image}
            alt="product image"
            className="my-auto max-w-full max-h-full object-cover object-center mix-blend-darken"
          />
        </div>
        <div>
          <p className="font-Quicksand text-sm pt-4 pl-2 ">{product.title}</p>
          <p className="font-Quicksand text-gray-600 text-xs pt-2 pl-2">
            {" "}
            {product.category}
          </p>
        </div>
      </div>
      <div className="w-1/4 text-md justify-center">
        <div className="h-7 w-20 mx-auto flex items-center border-[1px] rounded-lg">
          <button onClick={handleDecrement} className="px-2">
            {" "}
            -{" "}
          </button>
          <p className="px-2 font-Quicksand">{product.itemcount}</p>
          <button onClick={handleIncrement} className="px-2">
            {" "}
            +{" "}
          </button>
        </div>
        <div className="my-2 ">
          <button
            onClick={handleRemove}
            className="flex items-center border-[1px] mx-auto text-gray-700 rounded px-1"
          >
            <RiDeleteBin2Line />
            <p className="text-sm font-Quicksand ">remove</p>
          </button>
        </div>
      </div>
      <div className="w-1/4 flex items-center font-Quicksand ">
        <BiDollar />
        {product.price * product.itemcount}
      </div>
    </div>
  );
};

export default CartList;
