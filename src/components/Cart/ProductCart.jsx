import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useCartContext } from "../../Context/cartContext/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ProductCart = ({ cartDetails }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartContext();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: cartDetails });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: cartDetails });
  };

  const handleIncrementQuantity = () => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: cartDetails });
  };

  const handleDecrementQuantity = () => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: cartDetails });
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-white/10">
      <figure>
        <img
          src={cartDetails.image}
          alt="Shoes"
          className="aspect-video object-cover"
          style={{ height: "100%", width: "100%" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{cartDetails.productName}</span>
          {cartDetails.new && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p className="line-clamp-2">{cartDetails.productDiscription}</p>

        <div className="flex items-center gap-4">
          <p>
            <strong>{cartDetails.Price}</strong> Rs
          </p>
          <button
            onClick={handleIncrementQuantity}
            className="btn btn-square btn-outline btn-sm"
          >
            <FaPlus />
          </button>
          <span className="font-semibold">{cartDetails.quantity}</span>
          <button
            onClick={handleDecrementQuantity}
            className="btn btn-square btn-outline btn-sm"
          >
            <FaMinus />
          </button>
        </div>

        {cartDetails.inStock ? (
          <p className="text-green-500">{cartDetails.inStock} items left..!!</p>
        ) : (
          <p className="text-red-500">Out of Stock...</p>
        )}

        {cartDetails.fastDeliver ? (
          <p className="text-blue-400 flex items-center gap-3">
            Fast Delivery <AiOutlineThunderbolt className="mt-1" />
          </p>
        ) : (
          <p className="text-blue-400">5 Days Delivery</p>
        )}

        <div className="card-actions justify-between mt-6">
          {cart.some((p) => p.id === cartDetails.id) ? (
            <button
              onClick={handleRemoveFromCart}
              className="btn btn-outline btn-warning"
            >
              Remove From Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="btn btn-outline btn-info"
            >
              Add To Cart
            </button>
          )}

          <button className="btn btn-outline btn-info" onClick={()=> alert('we will add this functionality in future')}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
