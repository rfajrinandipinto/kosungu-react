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

function App() {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setData(response.data))
      .then(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <div className="App relative">
      <Navbar />
      <Header />

      <div className="flex items-center">
        <div className="swiper-button-prev-unique absolute left-20 text-2xl">
          <BsArrowLeftCircle />{" "}
        </div>

        <div className="container mx-auto xl:px-16  lg:px-10 py-10">
          <p className="text-2xl font-semibold mb-3">Rekomendasi</p>

          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next-unique",
              prevEl: ".swiper-button-prev-unique",
            }}
          >
            {!loading
              ? data.map((e) => {
                  return (
                    <SwiperSlide>
                      <ItemCard data={e} />
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>
        </div>
        <div className="swiper-button-next-unique  absolute right-20 text-2xl">
          <BsArrowRightCircle />
        </div>
      </div>

      <WhyChooseUs />

      <div className="flex items-center">
        <div className="container mx-auto xl:px-16  lg:px-10 py-10">
          <p className="text-2xl font-semibold mb-3">Rekomendasi</p>

          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next-unique",
              prevEl: ".swiper-button-prev-unique",
            }}
          >
            {!loading
              ? data.map((e) => {
                  return (
                    <SwiperSlide>
                      <ItemCard data={e} />
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>
        </div>
      </div>

      <div className="flex items-center">
        <div className="container mx-auto xl:px-16  lg:px-10 py-10">
          <p className="text-2xl font-semibold mb-3">Rekomendasi</p>

          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              nextEl: ".swiper-button-next-unique",
              prevEl: ".swiper-button-prev-unique",
            }}
          >
            {!loading
              ? data.map((e) => {
                  return (
                    <SwiperSlide>
                      <ItemCard data={e} />
                    </SwiperSlide>
                  );
                })
              : ""}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
