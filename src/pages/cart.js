import React, { useContext, useState, useEffect } from "react";
import Header from "../header";
import Navbar from "../Navbar";
import Footer from "../footer";
import CartContext from "./cartContext";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
 const { cartData, dispatch } = useContext(CartContext);
 const [totalPrice, setTotalPrice] = useState(0);
 const [coupon, setCoupon] = useState("");
 const [grandTotal, setGrandTotal] = useState(0);


const handleDeleteReservedList = (index, dispatch) => {
  dispatch({ type: "REMOVE_CART_DATA", index });
};

useEffect(() => {
  let sum = 0;
  for (const cart of cartData) {
    sum += parseFloat(cart.priceEvent);
  }
  setTotalPrice(sum);

let couponDiscount = 0;
  if (coupon === 'SHECODES10') {
    couponDiscount = sum * 0.1;
  }
  const totalWithDiscount = sum - couponDiscount;
  setGrandTotal(totalWithDiscount);
}, [cartData, coupon]);

const handleCouponChange = (event) => {
  setCoupon(event.target.value);
};

const handleCheckout = () => {
  console.log('Checkout button clicked!');
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
      <div className="makefinal text-center">
        <label>
          Sub Total <br />
          <input
            type="text"
            inputmode="numeric"
            className="totalprice"
            value={totalPrice}
            readOnly
          />
        </label>
        <div class="coupon-wrapper">
          <label>
            Coupon Code <br />
            <input
              type="text"
              className="coupon"
              value={coupon}
              onChange={handleCouponChange}
            />
          </label>
          <button className="addcoupon">Add Coupon</button>
        </div>
        <label>
          Grand Total <br />
          <input
            type="text"
            inputmode="numeric"
            className="grandtotal"
            value={grandTotal}
            readOnly
          />
        </label>
        <div>
          <button className="checkout" onClick={handleCheckout}>
            Check out
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
