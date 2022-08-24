import React from "react";

const IndividualFilteredProduct = ({
  individualFilteredProduct,
  addToCart,
  deleteProduct,
  user,
}) => {
  const handleAddToCart = () => {
    addToCart(individualFilteredProduct);
  };

  const handleDelete = () => {
    deleteProduct(individualFilteredProduct);
  };

  return (
    <div className="product">
      <div className="product-img">
        <img src={individualFilteredProduct.url} alt="product-img" />
      </div>
      <div className="product-text title">
        {individualFilteredProduct.title}
      </div>
      <div className="product-text description">
        {individualFilteredProduct.description}
      </div>
      <div className="product-text price">
        ₹ {individualFilteredProduct.price}
      </div>
      <div>
        <div
          className="btn btn-danger btn-md cart-btn mx-2"
          onClick={handleAddToCart}
        >
          Add to cart
        </div>
        {user === "admin" && (
          <div
            className="btn btn-danger btn-md cart-btn"
            onClick={handleDelete}
          >
            Delete
          </div>
        )}
      </div>
    </div>
  );
};

export default IndividualFilteredProduct;
