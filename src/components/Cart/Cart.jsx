import React from "react";
import SubTotalSideBar from "./SubTotalSideBar";
import CartBody from "./CartBody";

function Cart() {
  return (
    <div className="flex">
      <CartBody />
      <div>
        <SubTotalSideBar />
      </div>
    </div>
  );
}

export default Cart;
