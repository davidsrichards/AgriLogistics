import ProduceReview from "./ProduceReviews/ProduceReviews";

function ThirdComponent() {
  return (
    <div className="bg-[#f1f3f5] flex items-center justify-center flex-col py-24">
      <h1 className="font-bold text-[1.8rem]">Customer Reviews</h1>
      <ProduceReview />
    </div>
  );
}

export default ThirdComponent;
