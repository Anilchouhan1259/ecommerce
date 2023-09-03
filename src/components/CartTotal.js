import { UseSelector, useSelector } from "react-redux";
const CartTotal = () => {
  const data = useSelector((state) => {
    return state.cart.data;
  });
  let totalItems = 0;
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice = totalPrice + data[i].itemcount * data[i].price;
    totalItems = totalItems + data[i].itemcount;
  }
  console.log(totalPrice);
  console.log(totalItems);
  console.log("hi");
  return (
    <div className="border border-solid mt-2 ml-4 mr-16 rounded-lg">
      <div className="flex justify-between mt-2 p-2">
        <p className="font-Quicksand text-md text-gray-600">Subtotal</p>
        <p className="font-Quicksand text-md">{totalPrice}</p>
      </div>
      <div className="font-Quicksand text-md flex  justify-between mt-2 p-2 border-dashed border-b">
        <p className="text-gray-600">Total items</p>
        <p className="">{totalItems}</p>
      </div>
      <div className="mx-2 ">
        <button className="w-full bg-black text-white h-[35px] rounded-lg my-3 ">
          Checkout now
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
