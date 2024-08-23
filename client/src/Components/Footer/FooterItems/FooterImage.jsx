function FooterImage() {
  return (
    <div className="flex flex-col  justify-center gap-4 text-white">
      <div className="flex items-start  gap-6 transition-all duration-300 ease-in-out ">
        <img
          src="https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/08/mt-0994-logo.png"
          alt="Logo"
          className="left-4 w-16 h-16  transition-all duration-300 ease-in-out"
        />
        <div className="text-white -space-y-1  text-nowrap transition-all duration-300 ease-in-out footer-item ">
          <h2 className="font-bold fourth-h text-primary text-[1.8rem]">
            Grain Plus
          </h2>
          <h3 className="font-normal text-[#328d4a]">Logistics Limited</h3>
        </div>
      </div>
      <p className="footer-h">
        Why in the world would you choose our wine restaurant out of all other
        Milwaukee locations?
      </p>
      {/*  */}
      <p className="footer">
        We believe that our diverse choice of red, rose and white wines, on par
        with a huge range of miscellaneous countries of those wines’ origins can
        be a winning factor. All this makes us the ultimate place in Milwaukee
        and Wisconsin, where you are able to order any bottle of wine paired
        with any side dish of your choice…
      </p>
    </div>
  );
}

export default FooterImage;
