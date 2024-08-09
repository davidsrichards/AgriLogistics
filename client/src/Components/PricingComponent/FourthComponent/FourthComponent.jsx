import PricingList from "../PricingList/PricingList";

function FourthComponent() {
  return (
    <ul
      role="list"
      className="divide-y-2 divide-slate-600 text-slate-600 text-[14px] p-4 py-6"
    >
      <PricingList value={"Apple"} price={"$500"} />
      <PricingList value={"Orange"} price={"$650"} />
      <PricingList value={"Peach"} price={"$620"} />
      <PricingList value={"Plum"} price={"$1500"} />
      <PricingList value={"Cherry"} price={"$080"} />
      <PricingList value={"Apricot"} price={"$940"} />
      <PricingList value={"Pear"} price={"$800"} />
    </ul>
  );
}

export default FourthComponent;
