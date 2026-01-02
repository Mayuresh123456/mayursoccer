import { useParams } from "react-router-dom";
import { useState} from "react";
import { useContext } from "react";
import productsmain from "./productsmain";
import { CartContext } from "./CartContext";
import { isLoggedIn } from "./auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetailsMain = () => {


  const { id } = useParams();
  const product = productsmain.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) return <h2>Product not found</h2>;

  const loggedIn = isLoggedIn();

  return (
    <>
    <Navbar/>
    <div>
      <img src={product.image} width="300" />
      <h2>{product.name}</h2>
      <h3>₹{product.price}</h3>

      <h4>Colors</h4>
      {product.colors.map((color) => (
        <button key={color} onClick={() => setSelectedColor(color)}>
          {color}
        </button>
      ))}

      <h4>Sizes</h4>
      {product.sizes.map((size) => (
        <button key={size} onClick={() => setSelectedSize(size)}>
          {size}
        </button>
      ))}

      <br /><br />

      <button
        disabled={!loggedIn}
        style={{
          opacity: loggedIn ? 1 : 0.5,
          cursor: loggedIn ? "pointer" : "not-allowed"
        }}
        onClick={() => {
          if (!selectedSize || !selectedColor) {
            alert("Select size & color");
            return;
          }
          addToCart(product, selectedSize, selectedColor);
          alert("Added to cart");
        }}
      >
        {loggedIn ? "Add to Cart" : "Login to Add to Cart"}
      </button>
    </div>
    <Footer/>
    </>
  );
  
};

export default ProductDetailsMain;
