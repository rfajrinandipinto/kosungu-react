import React from "react";
import { BsChevronRight } from "react-icons/bs";

const BreadCrumb = () => {
  return (
    <div className="header-component bg-purple-600">
      <div className="container mx-auto xl:px-16  lg:px-10 py-2">
        <div className="flex text-white gap-2 items-center">
          <p className="font-semibold">Home</p>
          <BsChevronRight />
          <p className="font-semibold">Kategori</p>
          <BsChevronRight />
          <p className="font-semibold">Nama Kost</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
