import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import mylogo from "./assets/mylogo.jpg";


const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const { cart } = useContext(CartContext);

  // total quantity in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <div id="logotext">
        <img src={mylogo} alt="logo" id="logo" />
        <span id="websitename">MayurSoccer</span>
      </div>

      <ul id="content">
        <li>{isLoggedIn && <p>{user?.name}</p>}</li>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/account">Account</Link></li>

       
        <li style={{ position: "relative" }}>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            🛒 Cart
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-12px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
