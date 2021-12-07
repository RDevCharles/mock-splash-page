import React from "react";
import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";
import BookingForm from "./components/BookingForm";
import VisualQueue from "./components/VisualQueue";

const Home = () => {
  return (
    <>
      <VisualQueue />

      <div className="main_container">
        <h3>Delivery Cost: $25 USD in AVAX</h3>

        <BookingForm />
      </div>
    </>
  );
};

export default Home;
