import React from "react";
import GlobalServices from "./GlobalServices";

const Services = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-8 py-24">
      <h1 className=" self-center text-[2.5rem] font-semibold">
        Our Services For Farmers:
      </h1>
      <div className="lg:grid lg:grid-cols-4 gap-4 lg:p-4 p-2 ">
        <GlobalServices
          image={
            "https://images.pexels.com/photos/8428076/pexels-photo-8428076.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          title={"Fair Pricing:"}
          content={
            "We ensure competitive prices for your produce, helping you get the best returns."
          }
        />
        <GlobalServices
          image={
            "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?b=1&s=612x612&w=0&k=20&c=7rCLdLKsiflXsLWf59S6w0u_rSPQZ9bqyspLqn8o8jg="
          }
          title={"Reliable Logistics:"}
          content={
            "We handle the transportation and delivery, allowing you to focus on what you do best."
          }
        />
        <GlobalServices
          image={
            "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=6000"
          }
          title={"Simple Ordering"}
          content={
            "Our user-friendly platform makes it easy to browse, select, and order your favorite grains and crops."
          }
        />
        {/*  <GlobalServices
          image={
            "https://media.istockphoto.com/id/1399582867/photo/woman-checking-the-grocery-receipt.jpg?b=1&s=612x612&w=0&k=20&c=vqJxUYyZafofi2hGNLGUhxeTlE1H7VENy72zJL_WM_4="
          }
          title={"Transparent Pricing:"}
          content={
            "Know exactly what you are paying for with our clear and honest pricing."
          }
        /> */}

        <GlobalServices
          image={
            "https://images.pexels.com/photos/4254140/pexels-photo-4254140.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          title={"Fast Delivery: "}
          content={"enjoy quick and reliable delivery right to your doorstep"}
        />
      </div>
    </div>
  );
});

export default Services;
