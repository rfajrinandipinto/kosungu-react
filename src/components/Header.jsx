import React from "react";

const Header = () => {
  return (
    <div className="header-component bg-purple-600">
      <div className="container mx-auto xl:px-16  lg:px-10 py-20">
        <div className="flex flex-col text-white gap-2">
          <p className="text-4xl font-semibold">Cari Kost Dekat AMIKOM</p>
          <p className="text-4xl font-semibold">Cepat dan Lengkap</p>
          <p className="text-lg">Harga Terbaik, Mudah dan terpercaya</p>
          <div className="flex">
            <button className=" bg-white text-purple-600 py-2 px-3 rounded font-semibold">Sewa Sekarang !</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
