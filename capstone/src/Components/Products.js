import React from "react";
import IndividualProduct from "./IndividualProduct";

const Products = ({ products, addToCart, deleteProduct, user }) => {
  // console.log(products);

  return products.map((individualProduct) => (
    <IndividualProduct
      key={individualProduct.ID}
      individualProduct={individualProduct}
      addToCart={addToCart}
      deleteProduct={deleteProduct}
      user={user}
    />
  ));
};

export default Products;
