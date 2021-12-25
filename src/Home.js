import React from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import SideBar from "./components/SideBar";

const Home = () => {
  return (
    <>
      <SideBar />

      <div className="main_container">
        <h3>Delivery Cost: $25 USD in AVAX</h3>

        <BookingForm />
      </div>
    </>
  );
};

export default Home;
