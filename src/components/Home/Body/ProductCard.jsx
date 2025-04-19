import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Ratings from "../../../pages/Ratings/Ratings";
import { useCartContext } from "../../../Context/cartContext/CartContext";

const ProductCard = ({ productdetails }) => {
  const {state: {cart}, dispatch } = useCartContext();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: productdetails });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productdetails });
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-white/10">
      <figure>
        <img
          src={productdetails.image}
          alt="Shoes"
          className="aspect-video object-cover"
          style={{ height: "100%", width: "100%" }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="line-clamp-1">{productdetails.productName}</span>
          {productdetails.new && (
            <div className="badge badge-secondary">NEW</div>
          )}
        </h2>
        <p className="line-clamp-2">{productdetails.productDiscription}</p>
        <p>
          <strong>{productdetails.Price}</strong> Rs
        </p>
        {productdetails.inStock ? (
          <p className="text-green-500">
            {productdetails.inStock} items left..!!
          </p>
        ) : (
          <p className="text-red-500">Out of Stock...</p>
        )}

        {productdetails.fastDeliver ? (
          <p className="text-blue-400 flex items-center gap-3">
            Fast Delivery <AiOutlineThunderbolt className="mt-1" />
          </p>
        ) : (
          <p className="text-blue-400">5 Days Delivery</p>
        )}

        <Ratings defaultRating={productdetails.ratings} />



        <div className="card-actions justify-between mt-6">
          {cart.some(p=>p.id === productdetails.id) ? (
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
          
          <button
            className="btn btn-outline btn-info"
            onClick={()=> alert('we will add this functionality in future')}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
