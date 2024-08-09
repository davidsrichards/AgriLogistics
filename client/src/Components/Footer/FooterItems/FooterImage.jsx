function FooterImage() {
  return (
    <div className="flex items-start lg:justify-end gap-6 transition-all duration-300 ease-in-out ">
      <img
        src="https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/08/mt-0994-logo.png"
        alt="Logo"
        className="left-4 w-16 h-16  transition-all duration-300 ease-in-out"
      />
      <div className="text-white -space-y-1  text-nowrap transition-all duration-300 ease-in-out footer-item ">
        <h2 className="font-bold  text-[1.4rem]">AgriLogistics</h2>
        <h3 className="font-normal">largest agricultural</h3>
        <h3 className="font-normal">processors</h3>
      </div>
    </div>
  );
}

export default FooterImage;
