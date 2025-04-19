import React from "react";
import { useCartContext } from "../../Context/cartContext/CartContext";
import ProductCart from "./ProductCart";

const CartBody = () => {
  const {
    state: { cart },
  } = useCartContext();

  return (
    <div className="w-full border-r border-r-white/10">
      {cart.length <= 0 ? (
        <div className="w-full flex items-center justify-center mt-6 text-xl font-semibold">
          Cart is empty now..!!
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-[1rem] max-[1150px]:grid-cols-2 max-[850px]:grid-cols-1 p-3">
          {cart.map((productDetails) => {
            return (
              <ProductCart
                key={productDetails.id}
                cartDetails={productDetails}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartBody;
