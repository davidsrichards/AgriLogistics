import ImageReviews from "./ImageReviews";
function ProduceReview() {
  return (
    <div className="grid md:grid-cols-3 p-4 mx-auto gap-6 py-16 customer-image-container">
      <ImageReviews
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-produce-img1.jpg"
        }
        content={
          '"Thanks to the guys from Farmland, we have always fresh produce on our table. Their fast services are second to none! Highly recommend!"'
        }
        name={"Brian Benson"}
      />
      <ImageReviews
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-produce-img2.jpg"
        }
        content={
          '"Working with this agricultural company has been a great pleasure for me! I\'ve been ordering their great produce, grains and nuts for my grocery for years!"'
        }
        name={"Arthur Arnolds"}
      />
      <ImageReviews
        image={
          "https://template65073.motopreview.com/mt-demo/65000/65073/mt-content/uploads/2017/09/mt-0994-produce-img3.jpg"
        }
        content={
          '"We have consistently used innovative production techniques to ensure that we are at the forefront of technological improvements."'
        }
        name={"Mike Long"}
      />
    </div>
  );
}

export default ProduceReview;
