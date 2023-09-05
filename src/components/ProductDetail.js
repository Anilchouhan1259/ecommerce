import React from "react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BiRupee, BiChevronRight } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useFetchProductDetailQuery } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchProductDetailQuery(id);
  const gggg = useSelector((state) => {
    return state.cart;
  });
  console.log(gggg.data);
  const dispatch = useDispatch();
  const handleClick = () => {
    const cartData = {
      ...data,
      itemcount: 1,
    };
    console.log(cartData);
    dispatch(addToCart(cartData));
  };
  console.log(data);

  return (
    <div>
      {isLoading ? (
        "loading...."
      ) : (
        <div className="m-10">
          <div className="block md:grid md:grid-cols-2">
            <div className="">
              <div className="">
                <img
                  src={data.image}
                  className="h-2/4 w-2/4 object-cover object-center mx-auto"
                />
              </div>
            </div>
            <div className="">
              <div className="flex items-center text-gray-800">
                Shop <BiChevronRight />
                {data.category}
              </div>

              <div className="font-sans text-2xl font-bold py-6">
                {data.title}
              </div>
              <div className="flex items-center">
                <IconContext.Provider value={{ color: "F9E847" }}>
                  <FaStar />
                </IconContext.Provider>
                <div className="m-2">{data.rating.rate}</div>
                <div className="m-2">{data.rating.count}</div>
              </div>
              <div>
                <span className="text-xl font-semibold">About Product</span>
                <p className="font-normal py-1">{data.description}</p>
              </div>
              <div className="flex items-center py-8">
                <button
                  onClick={handleClick}
                  className="flex items-center rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  <BsCartFill /> <span className="ml-3">Add to cart</span>
                </button>
                <div className="flex items-center px-8 py-2.5 text-md font-semibold rounded-full border-solid border-2 border-gray-400">
                  <BiRupee />
                  {data.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
