import React from "react";
import FilterBar from "./Filterbar/FilterBar";
import Body from "./Body/Body";

function Home() {
  return (
    <div className="flex">
      <div className="max-[570px]:hidden">
        <FilterBar />
      </div>
      <Body />
    </div>
  );
}

export default Home;
