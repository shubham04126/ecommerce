import React from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/feather/plus";
import { minus } from "react-icons-kit/feather/minus";
import { auth, fs } from "../Config/Config";
import "./button.css";
const IndividualCartProduct = ({
  cartProduct,
  cartProductIncrease,
  cartProductDecrease,
}) => {
  const handleCartProductIncrease = () => {
    cartProductIncrease(cartProduct);
  };

  const handleCartProductDecrease = () => {
    cartProductDecrease(cartProduct);
  };

  const handleCartProductDelete = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid)
          .doc(cartProduct.ID)
          .delete()
          .then(() => {
            console.log("successfully deleted");
          });
      }
    });
  };

  return (
    <div className="product1" style={{ width: "378px" }}>
      <div className="product1-img">
        <img src={cartProduct.url} alt="product1-img" />
      </div>
      <div className="product1-text title">{cartProduct.title}</div>
      <div className="product1-text description">{cartProduct.description}</div>
      <div className="product1-text price">₹ {cartProduct.price}</div>
      <span>Quantity</span>
      <div className="product1-text quantity-box">
        <div className="action-btns minus" onClick={handleCartProductDecrease}>
          <Icon icon={minus} size={20} />
        </div>
        <div>{cartProduct.qty}</div>
        <div className="action-btns plus" onClick={handleCartProductIncrease}>
          <Icon icon={plus} size={20} />
        </div>
      </div>
      <div className="product1-text cart-price">
        ₹ {cartProduct.TotalProductPrice}
      </div>
      <div className="frame" onClick={handleCartProductDelete}>
        <button class="custom-btn btn-10">DELETE</button>
      </div>
    </div>
  );
};

export default IndividualCartProduct;
