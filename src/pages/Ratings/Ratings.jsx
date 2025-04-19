import React, { useEffect, useState } from "react";

const Ratings = ({defaultRating = 1, isEditable, onRatingChange=()=>{}}) => {
  const [selectedrating, setselectedratings] = useState(defaultRating);

  useEffect(()=>{
    onRatingChange(selectedrating)
  },[selectedrating])

  return (
      <div className={`rating ${!isEditable && 'pointer-events-none'}`}>
        {[1, 2, 3, 4, 5].map((value) => (
          <>
            {value <= selectedrating ? (
              <input onClick={()=> setselectedratings(value)} type="radio" className="mask mask-star-2 bg-orange-400" defaultChecked />
            ) : (
              <input onClick={()=> setselectedratings(value)}  className="mask mask-star-2 bg-orange-400" defaultChecked/>
            )}
          </>
        ))}
      </div>
  );
};

export default Ratings;
