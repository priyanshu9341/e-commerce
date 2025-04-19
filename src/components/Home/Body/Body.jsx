import React from "react";
import { useCartContext } from "../../../Context/cartContext/CartContext";
import ProductCard from "./ProductCard";

const Body = () => {
  const { state: {products} } = useCartContext();

  return (
    <>
    {products.length <=0 ? (
      <div className="text-center mt-5"><h1>No matches found...</h1></div>
    ) : (
      <div className="grid grid-cols-3 gap-[1rem] max-[1100px]:grid-cols-2 max-[850px]:grid-cols-1 p-3 border-l border-l-white/10">
      {products.map((product) => {
        return <ProductCard key={product.id} productdetails={product}/>;
      })}
      </div>
    )}
    
    </>
  );
};

export default Body;
