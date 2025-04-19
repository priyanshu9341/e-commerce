import React, { useEffect, useState } from "react";
import Ratings from "../../../pages/Ratings/Ratings";
import { useCartContext } from "../../../Context/cartContext/CartContext";

const FilterBar = () => {
  const initialFilters = {
    price: 5000,
    ratings: 1,
    sortingType: false,
    includeOutofStock: true,
    fastDelivery: false,
  };

  const {
    state: { unfilteredProduct },
    dispatch,
  } = useCartContext();

  const [filters, setfilters] = useState(initialFilters);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    console.log(name, value, checked, type);

    setfilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClearFilter = () => {
    setfilters(initialFilters);
  };

  // console.log(unfilteredProduct)

  useEffect(() => {
    let filteredItems = unfilteredProduct.filter((p) => {
      let priceCondition = p.Price <= filters.price;
      let ratingCondition = p.ratings >= filters.ratings;
      let includeOutOfStockCondition = filters.includeOutofStock
        ? true
        : p.inStock;
      let deliveryCondition = filters.fastDelivery ? p.fastDeliver : true;
      return (
        includeOutOfStockCondition &&
        priceCondition &&
        ratingCondition &&
        deliveryCondition
      );
    });

    filteredItems = filters.sortingType
      ? filteredItems.sort((Pa, Pb) => {
          return filters.sortingType === "ascending"
            ? Pa.productName.localeCompare(Pb.productName)
            : Pb.productName.localeCompare(Pa.productName);
        })
      : filteredItems;

      // console.log(filteredItems)

    dispatch({
      type: "SET_PRODUCT",
      payload: filteredItems,
    });
  }, [filters, unfilteredProduct]);

  return (
    <div className="w-full min-w-[15rem] border-r border-r-white/10 p-6 sticky top-[4.5rem]">
      {/* radio ascending and dexcending */}
      <div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text">Ascending </span>
            <input
              type="radio"
              name="sortingType"
              className="radio  border-blue-500 checked:bg-blue-500"
              value="ascending"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text">Descending</span>
            <input
              type="radio"
              name="sortingType"
              className="radio  border-blue-500 checked:bg-blue-500"
              value="descending"
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/20 my-6"></div>

      {/* checkbox for out of stock and fast deleviiry */}
      <div>
        <div className="form-control mt-5">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text">Include Out of Stock </span>
            <input
              type="checkbox"
              checked={filters.includeOutofStock}
              onChange={handleInputChange}
              name="includeOutofStock"
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.600)] [--chkfg:orange] checked:border-indigo-800 "
            />
          </label>
        </div>

        <div className="form-control mt-5">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text">Fast Delivery Only</span>
            <input
              type="checkbox"
              checked={filters.fastDelivery}
              onChange={handleInputChange}
              name="fastDelivery"
              className="checkbox border-blue-500 [--chkbg:theme(colors.blue.600)] [--chkfg:orange] checked:border-indigo-800 "
            />
          </label>
        </div>
      </div>

      {/* ratings */}
      <div className="my-6">
        <Ratings
          defaultRating={filters.ratings}
          isEditable={true}
          onRatingChange={(rating) =>
            setfilters({ ...filters, ratings: rating })
          }
        />
      </div>

      {/* price range */}
      <div className="flex flex-col gap-3 my-8">
        <p>
          price: <strong>{filters.price}</strong> Rs
        </p>
        <input
          type="range"
          min={0}
          max={5000}
          name="price"
          value={filters.price}
          onChange={handleInputChange}
          className="range range-info"
        />
      </div>

      {/* clear filter */}
      <button onClick={handleClearFilter} className="btn btn-neutral w-full">
        Clear Filters
      </button>
    </div>
  );
};

export default FilterBar;
