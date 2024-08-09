import Images from "./Images";

function ThirdCard() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-4 py-24">
      <h1 className="font-bold  text-[3rem] pb-12">From the Blog</h1>
      <Images />
    </div>
  );
}

export default ThirdCard;

/*      <div className={`${styles.box} ${startAnimation ? styles.slide : ""}`}></div>*/
