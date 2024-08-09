import PricingList from "../PricingList/PricingList";

function EightComponent() {
  return (
    <ul
      role="list"
      className="divide-y-2 divide-slate-600 text-slate-600 text-[14px] p-4 py-6"
    >
      <PricingList value={"Latakia"} price={"$500"} />
      <PricingList value={"Burley"} price={"$650"} />
      <PricingList value={"Dokha"} price={"$620"} />
    </ul>
  );
}

export default EightComponent;
