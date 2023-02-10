import React from "react";

const DetailGallery = (params) => {
  return (
    <div className="header-component">
      <div className="container mx-auto xl:px-16  lg:px-10 py-6 ">
        <div className="flex text-white gap-2 relative">
          <div className="basis-2/3 flex" style={{ maxHeight: "30.5rem" }}>
            <img src={params.url} alt="" className=" object-cover w-full rounded-l" />
          </div>
          <div className="basis-1/3 flex flex-col justify-between">
            <img src={params.url} alt="" className=" object-cover max-h-60 rounded-tr" />
            <img src={params.url} alt="" className=" object-cover max-h-60 rounded-br" />
          </div>
          <p className="border rounded py-2 px-3 font-semibold absolute bg-white right-3 bottom-3 text-black">Lihat Semua Foto</p>
        </div>
      </div>
    </div>
  );
};

export default DetailGallery;
