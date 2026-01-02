import { BrowserRouter,Routes, Route } from "react-router-dom";
import SignUp from "./Login/SignUp";
import React from "react";
import Login from "./Login/Login";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import About from "./About";
import Products from "./Products";
import ProductDetailsMain from "./ProductDetailsMain";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
const App = () => {
  return(
    <>
    <BrowserRouter>
    <CartProvider>
    <Routes>
      <Route path="/account" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/productss/:id" element={<ProductDetailsMain/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart />} />

    </Routes>
    </CartProvider>
    </BrowserRouter>
      
    </>
  )

}
export default App;