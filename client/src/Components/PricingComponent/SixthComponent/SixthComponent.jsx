import PricingList from "../PricingList/PricingList";
function SixthComponent() {
  return (
    <ul
      role="list"
      className="divide-y-2 divide-slate-600 text-slate-600 text-[14px] p-4 py-6"
    >
      <PricingList value={"Oat"} price={"$500"} />
      <PricingList value={"Rice"} price={"$650"} />
      <PricingList value={"Rye"} price={"$620"} />
      <PricingList value={"Wheat"} price={"$850"} />
      <PricingList value={"Proso"} price={"$650"} />
      <PricingList value={"Common Beans"} price={"$250"} />
      <PricingList value={"Peanut"} price={"$150"} />
    </ul>
  );
}

export default SixthComponent;
