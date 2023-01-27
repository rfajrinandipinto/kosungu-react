import { useState } from "react";
import "./App.css";
import BreadCrumb from "./components/BreadCrumb";
import DetailDescription from "./components/DetailDescription";
import DetailGallery from "./components/DetailGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import PaymentDetail from "./components/PaymentDetail";
import WhyChooseUs from "./components/WhyChooseUs";

function Payment() {
  return (
    <div className="Payment">
      <Navbar />
      <BreadCrumb />
      <PaymentDetail />
      <Footer />
    </div>
  );
}

export default Payment;
