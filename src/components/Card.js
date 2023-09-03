import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Card = ({ products }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div key={product.id} className="group relative">
                <div className="flex justify-center aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt="product image"
                    className="mx-auto my-auto max-h-full max-w-full object-cover object-center mix-blend-darken "
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                  </div>
                  <div className="flex">
                    <div className="">
                      <IconContext.Provider value={{ color: "black" }}>
                        <LiaRupeeSignSolid />
                      </IconContext.Provider>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
