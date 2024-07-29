import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductUpload from "./pages/productupload";
import "./App.css";
import ProductDescription from "./pages/ProductDescription";

function App() {
  const sampleProduct = {
    productName: 'Sample Product',
    description: 'This is a sample product description. It provides details about the product, features, and other important information.',
    image: 'https://via.placeholder.com/400',
    category: 'Electronics',
    quantity: 10,
    price: 199.99
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/productupload" element={<ProductUpload/>} />
          <Route path="/product/:id" element={<ProductDescription product={sampleProduct}/>}/>
          <Route path="/productdescription" element={<ProductDescription />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
