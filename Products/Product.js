import React, { useState } from "react";
import "../Products/Products.css";
const ProductItems = () => {
  const [products, setproducts] = useState([]);
  const [productName, setproductsName] = useState("");
  const [productDesc, setproductsDesc] = useState("");
  const [productPrice, setproductsPrice] = useState("");
  const [productquantity, setproductsQuantity] = useState("");
  //   const [cartItems, setCartItems] = useState([]);
  const submithandler = (props) => {
    const newproducts = {
      name: productName,
      description: productDesc,
      price: productPrice,
      quantity: productquantity,
    };

    setproducts([...products, newproducts]);

    setproductsName("");
    setproductsDesc("");
    setproductsPrice("");
    setproductsQuantity("");
  };

  //   const addToCart = (product) => {
  //     setCartItems([...cartItems, product]);
  //   };

  return (
    <div>
      <div style={{ marginTop: "10%" }}>
        <label>Medicine Name</label>
        <input
          type="text"
          value={productName}
          onChange={(event) => setproductsName(event.target.value)}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={productDesc}
          onChange={(event) => setproductsDesc(event.target.value)}
        ></input>
        <label>price</label>
        <input
          type="number"
          value={productPrice}
          onChange={(event) => setproductsPrice(event.target.value)}
        ></input>
        <label>Quantity</label>
        <input
          type="text"
          value={productquantity}
          onChange={(event) => setproductsQuantity(event.target.value)}
        ></input>
        <button type="submit" onClick={submithandler}>
          Add product
        </button>
      </div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name},{product.description},{product.price},
            {product.quantity}
            <button type="submit" onClick={() => setproducts(products)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItems;
