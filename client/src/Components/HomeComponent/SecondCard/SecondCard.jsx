import Fruit from "./Fruits/Fruit";
import Items from "./Items/Items";

function SecondCard() {
  return (
    <div className=" w-full p-4 mx-auto grid gap-10 bg-[#f1f3f5] py-12">
      <Fruit />
      <div className="font-bold text-[3rem]">Why choose AgriLogistic</div>
      <Items />
    </div>
  );
}

export default SecondCard;
