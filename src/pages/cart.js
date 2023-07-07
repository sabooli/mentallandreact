import React, { useContext } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import CartContext from "./cartContext";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
 const { cartData, dispatch } = useContext(CartContext);

const handleDeleteReservedList = (index, dispatch) => {
  dispatch({ type: "REMOVE_CART_DATA", index });
};
  return (
    <div>
      <Header className="twitter" />
      <Navbar />
      <div className="cart">
        <div className="cartH">Cart({cartData.length})</div>
        <div className="cartlist">
          <div className="cartlisttitle">
            <div>Date</div>
            <div>Item</div>
            <div>Description</div>
            <div>Price</div>
            <div>Delete</div>
          </div>
          <div>
            {cartData.map((cart, index) => (
              <div className="reservedlist" key={index}>
                <div>{cart.dateEvent}</div>
                <div>{cart.item}</div>
                <div>{cart.titleEvent}</div>
                <div>{cart.priceEvent}</div>
                <div>
                  <RiDeleteBin6Line
                    className="svg deleteItem"
                    onClick={() => handleDeleteReservedList(index, dispatch)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
