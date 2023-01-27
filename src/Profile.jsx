import { useState } from "react";
import "./App.css";
import BreadCrumb from "./components/BreadCrumb";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";
import PaymentDetail from "./components/PaymentDetail";
import ProductList from "./components/ProductList";
import ProfileDetail from "./components/ProfileDetail";
import WhyChooseUs from "./components/WhyChooseUs";

function Profile() {
  return (
    <div className="Profile bg-gray-50">
      <Navbar />
      <BreadCrumb />
      <ProfileDetail />
      <Footer />
    </div>
  );
}

export default Profile;
