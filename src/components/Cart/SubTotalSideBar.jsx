import React from "react";
import { useCartContext } from "../../Context/cartContext/CartContext";

const SubTotalSideBar = () => {
  const {
    state: { cart },
  } = useCartContext();
  const cartLength = cart.length;
  const subTotal = cart.reduce(
    (acc, curr) => acc + curr.Price * curr.quantity,
    0
  );

  return (
    <div className="min-w-[15rem] border-l border-l-white/10 p-6 sticky top-[3.5rem]">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{cartLength} Items</span>
        <span className="text-info">Subtotal: {subTotal} Rs</span>
        <div className="card-actions">
          <button
            onClick={() =>
              alert("we will add this functionality in future")
            }
            className="btn btn-primary btn-block"
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotalSideBar;
