import React from "react";
import ProduceReview from "./ProduceReviews/ThirdComponent";

const CustomersReviews = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#f1f3f5] flex items-center justify-center flex-col py-24"
    >
      <h1 className="font-bold text-[1.8rem]">Customer Reviews</h1>
      <ProduceReview />
    </div>
  );
});

export default CustomersReviews;
