import Item from "./Item";

function Items() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img5.png"
        }
        title={"Wide Selection of Quality Products"}
        content={
          " Wide Selection of Quality Product We offer an extensive range of crops and grains sourced from trusted farmers and producers. Our products are carefully selected to meet the highest standards of quality and freshnes"
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img6.png"
        }
        title={" Efficient Logistics and Delivery"}
        content={
          " Efficient Logistics and Delivery Our state-of-the-art logistics system ensures that your orders are delivered on time, every time. With our robust network, we can reach you no matter where you are located."
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img7.png"
        }
        title={" Sustainable Practices"}
        content={
          "We are committed to sustainable farming and distribution practices. We work with eco-friendly partners to minimize our environmental footprint and promote a healthier planet."
        }
      />
      <Item
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/07/mt-0994-home-img8.png"
        }
        title={"Customer-Centric Approach"}
        content={
          "Your satisfaction is our top priority. Our customer support team is always ready to assist you with any inquiries or issues you may have, ensuring a seamless shopping experience."
        }
      />
    </div>
  );
}

export default Items;
