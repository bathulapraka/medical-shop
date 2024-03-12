import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Cart = ({size}) => {
  return (
    <div>
      <div>
        <span>
        <FaShoppingCart style={{marginLeft  :"90%",fontSize:"30px",marginBottom:"100px"}} values="size"  />
        <span style={{marginTop:"-200px"}}>{size}</span>
        </span>
      </div>
    </div>
  );
};

export default Cart;
