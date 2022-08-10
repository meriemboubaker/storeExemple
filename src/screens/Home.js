import React from "react";
import ProductCard from "../components/Card";

const Home = (props) => {
  return (
    <div className="d-flex justify-content-start flex-wrap container p-3 mx-auto">
      {props.data.map((elm) => (
        <ProductCard
          department={elm.department}
          productName={elm.productName}
          price={elm.price}
          productAdjective={elm.productAdjective}
          productMaterial={elm.productMaterial}
          product={elm.product}
          image={elm.image}
          id={elm.id}
        />
      ))}
    </div>
  );
};

export default Home;
