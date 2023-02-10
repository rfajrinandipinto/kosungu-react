import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import WhyChooseUs from "./components/WhyChooseUs";

import ItemCard from "./components/ItemCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Loading from "./components/Loading";

function App() {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setData(response.data))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="App relative">
      <Navbar />
      <Header />
      {loading ? <Loading /> : <ProductList type={"slider"} data={data} title={"Promo Terbaru"} />}
      <WhyChooseUs />
      {loading ? <Loading /> : <ProductList type={"product"} data={data} title={"Rekomendasi Kos"} />}
      {loading ? <Loading /> : <ProductList type={"product"} data={data} title={"Rekomendasi Kontrakan"} />}
      <Footer />
    </div>
  );
}

export default App;
