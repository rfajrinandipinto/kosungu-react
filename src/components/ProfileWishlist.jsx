import React from "react";

import { BsPencilFill } from "react-icons/bs";
import ItemCard from "./ItemCard";

const ProfileWishlist = () => {
  return (
    <div className="flex border p-5 flex-col rounded bg-white">
      <div className="flex gap-10 pb-3">
        <div className="flex flex-col w-full">
          <p className="text-lg mb-2 font-semibold">Wishlist Anda</p>

          <div className="flex flex-col gap-3">
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
            <ItemCard type={"flex"} />
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end"></div>
    </div>
  );
};

export default ProfileWishlist;
