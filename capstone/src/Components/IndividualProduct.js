import React from "react";
import "./indProdStyle.css";

const IndividualProduct = ({
  individualProduct,
  addToCart,
  deleteProduct,
  user,
}) => {
  // console.log(individualProduct);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };

  const handleDelete = () => {
    console.log("delete pro");
    deleteProduct(individualProduct);
  };

  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={individualProduct.url} alt="product-img" />
        </div>
        <div className="product-text title">{individualProduct.title}</div>
        <div className="product-text description">
          {individualProduct.description}
        </div>
        <div className="product-text price">₹ {individualProduct.price}</div>
        <div>
          <div className="btn btn-primary mx-2" onClick={handleAddToCart}>
            Add to cart
          </div>
          {user === "admin" && (
            <div className="btn btn-primary " onClick={handleDelete}>
              Delete
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default IndividualProduct;
