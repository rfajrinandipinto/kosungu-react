import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Admin from "./Admin";
import App from "./App";
import Detail from "./Detail";
import "./index.css";
import Payment from "./Payment";
import Product from "./Product";
import Profile from "./Profile";
import Cookie from "js-cookie";
import axios from "axios";

const checkUser = () => {
  const token = Cookie.get("token");

  if (!token) {
    return false;
  } else {
    return axios
      .get("http://localhost:3000/auth/whoami", {
        headers: {
          Authorization: "JWT " + token,
        },
      })
      .then((response) => response.data.owner);
  }
};

const ProtectedRoute = ({ children }) => {
  if (!checkUser()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
