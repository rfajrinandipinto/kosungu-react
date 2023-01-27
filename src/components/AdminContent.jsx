import React, { useState } from "react";
import { render } from "react-dom";
import AdminDashboard from "./AdminDashboard";
import AdminOwner from "./AdminOwner";
import AdminProduk from "./AdminProduk";
import AdminUser from "./AdminUser";

const AdminContent = (props) => {
  const renderPage = () => {
    switch (props.page) {
      case "dashboard":
        return <AdminDashboard />;
      case "owner":
        return <AdminOwner />;
      case "produk":
        return <AdminProduk />;
      case "user":
        return <AdminUser />;
    }
  };

  return (
    <div className="AdminContent-component my-6">
      <div className="container mx-auto xl:px-8  lg:px-10 pb-6">
        <div className="flex">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
