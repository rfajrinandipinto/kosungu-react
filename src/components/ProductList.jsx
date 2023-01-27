import React, { useEffect } from "react";
import ItemCard from "./ItemCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductList = (props) => {
  let data = props.data;
  const ProductSlider = () => {
    return (
      <div className="flex items-center">
        <div className="swiper-button-prev-unique absolute left-20 text-2xl">
          <BsArrowLeftCircle />{" "}
        </div>

        <div className="container mx-auto xl:px-16  lg:px-10 py-10">
          <p className="text-2xl font-semibold mb-3">{props.title}</p>

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
            {data.map((e) => {
              return (
                <SwiperSlide>
                  <ItemCard data={e} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="swiper-button-next-unique  absolute right-20 text-2xl">
          <BsArrowRightCircle />
        </div>
      </div>
    );
  };

  // const Product = () => {
  //   return (
  //     <div className="flex items-center">
  //       <div className="container mx-auto xl:px-20  lg:px-10 my-5">
  //         <div className="flex flex-col">
  //           <p className="text-2xl font-semibold mb-3">{props.title}</p>
  //           <div className="grid gap-5 grid-cols-4">
  //             <ItemCard />
  //             <ItemCard />
  //             <ItemCard />
  //             <ItemCard />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return <div className="productList-component flex flex-col items-center relative">{ProductSlider()}</div>;
};

export default ProductList;
