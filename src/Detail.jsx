import { useState } from "react";
import "./App.css";
import BreadCrumb from "./components/BreadCrumb";
import DetailDescription from "./components/DetailDescription";
import DetailGallery from "./components/DetailGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";

function Detail() {
  return (
    <div className="Detail">
      <Navbar />
      <BreadCrumb />
      <DetailGallery />
      <DetailDescription />
      {/* <ProductList title="Rekomendasi Kos Lain" slider={true} /> */}
      <Footer />
    </div>
  );
}

export default Detail;
