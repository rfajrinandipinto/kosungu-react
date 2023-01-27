import React from "react";

import ProfileDashboard from "./ProfileDashboard";
import ProfileRiwayat from "./ProfileRiwayat";
import ProfileWishlist from "./ProfileWishlist";
import { useState } from "react";

const ProfileDetail = () => {
  const [page, setPage] = useState("dashboard");

  const renderContent = () => {
    switch (page) {
      case "dashboard":
        return <ProfileDashboard />;
      case "riwayat":
        return <ProfileRiwayat />;
      case "wishlist":
        return <ProfileWishlist />;
    }
  };

  return (
    <div className="ProfileDetail-component my-6">
      <div className="container mx-auto xl:px-16  lg:px-10 pb-6">
        <div className="flex gap-10">
          <div className="basis-1/4">
            <div className="flex flex-col gap-1">
              <p className=" bg-purple-100 w-full p-2 rounded text-purple-600" onClick={() => setPage("dashboard")}>
                Dashboard Akun
              </p>
              <p className="  w-full p-2 rounded " onClick={() => setPage("riwayat")}>
                Riwayat Sewa
              </p>
              <p className="  w-full p-2 rounded " onClick={() => setPage("wishlist")}>
                Wishlist saya
              </p>
              <p className="  w-full p-2 rounded ">Logout</p>
              <p></p>
            </div>
          </div>

          <div className="basis-3/4 pr-2">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
