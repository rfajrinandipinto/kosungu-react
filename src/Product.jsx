import { useState } from "react";
import "./App.css";
import AuthModal from "./components/AuthModal";
import BreadCrumb from "./components/BreadCrumb";
import DetailDescription from "./components/DetailDescription";
import DetailGallery from "./components/DetailGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductSearch from "./components/ProductSearch";
import WhyChooseUs from "./components/WhyChooseUs";

function Product() {
  return (
    <div className="Product relative">
      <Navbar />
      <ProductSearch />
      <Footer />
      <AuthModal />
    </div>
  );
}

export default Product;
