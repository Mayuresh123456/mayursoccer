import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const { cart, clearCart, removeFromCart, addToCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // CHECKOUT
  const handleCheckout = () => {
    alert("🎉 Your order has been placed successfully!");
    clearCart();            // empty cart
    navigate("/products");  // redirect to products
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>
      Your cart is empty 🛒
    </h2>;
  }

  return (
    <>
    <Navbar/>
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>

          {/* QUANTITY CONTROLS */}
          <div className="cart-controls">
            <button onClick={() => removeFromCart(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>

          <p>Subtotal: ₹{item.price * item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove Item
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{totalPrice}</h3>

      <button onClick={handleCheckout}>
        Checkout
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
