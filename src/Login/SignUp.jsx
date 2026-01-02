import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ check login status
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    alert("Account created successfully!");
    navigate("/");
  };

  // ✅ logout logic
  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("cart");   // 🔥 clear cart
  alert("Logged out successfully");
  navigate("/login");
};


  return (
    <>
      <Navbar />
      <h1>SignUp Page</h1>

      {/* 🔹 show signup form only if NOT logged in */}
      {!isLoggedIn && (
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>

          <input
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>

          <input
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>

          <p>
            Already have an account ? <a href="/login">Login</a>
          </p><br/>

          <button type="submit">Sign Up</button>
        </form>
      )}

      {/* 🔹 show logout only if logged in */}
      {isLoggedIn && (
        <button className="logoutbuttonn" onClick={handleLogout}>Logout</button>
      )}

      <Footer />
    </>
  );
};

export default SignUp;
