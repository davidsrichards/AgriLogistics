import PricingList from "../PricingList/PricingList";

function SecondComponent() {
  return (
    <ul
      role="list"
      className="divide-y-2 divide-slate-600 text-slate-600 text-[14px] p-4 py-6"
    >
      <PricingList value={"Tomato"} price={"$500"} />
      <PricingList value={"Cucumbers"} price={"$650"} />
      <PricingList value={"Potatoes"} price={"$620"} />
      <PricingList value={"Corn"} price={"$850"} />
      <PricingList value={"Peas"} price={"$650"} />
      <PricingList value={"Pepper"} price={"$105"} />
    </ul>
  );
}

export default SecondComponent;
