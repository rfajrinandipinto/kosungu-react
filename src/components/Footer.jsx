import React from "react";

const Footer = () => {
  return (
    <div className="header-component bg-gray-100">
      <div className="container mx-auto xl:px-16  lg:px-10 py-8 mt-5">
        <div className="grid gap-5 grid-cols-4">
          <div className="flex flex-col">
            <p className="logo text-xl font-bold text-purple-600 mb-3">KosUngu</p>
            <p> &#169; 2023 KosUngu,</p>
            <p>All right reserved.</p>
          </div>
          <div className="flex flex-col">
            <p className="logo font-semibold mb-2">Marketplace</p>
            <p> About us</p>
            <p> Find Kos</p>
            <p> Categories</p>
            <p> Blogs</p>
          </div>
          <div className="flex flex-col">
            <p className="logo font-semibold mb-2">Information</p>
            <p> Help center</p>
            <p> Money refund</p>
            <p> Payment Info</p>
            <p> Refunds</p>
          </div>
          <div className="flex flex-col">
            <p className="logo font-semibold mb-2">Newsletter</p>
            <p> Stay in touch with latest updates about our latest price and offers</p>
            <form className="flex mt-2">
              <input type="email" className=" py-1 px-3 rounded-l border focus:outline-none focus:border-purple-500" placeholder="Email" />
              <button className="bg-white py-1 px-3 rounded-r border focus:bg-purple-600 focus:text-white text-semibold">Join</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
