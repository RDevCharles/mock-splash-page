import React from "react";
import "./App.css";
import detectEthereumProvider from "@metamask/detect-provider";
import BookingForm from "./components/BookingForm";
import VisualQueue from "./components/VisualQueue";
import DriverFeed from "./components/DriverFeed";

const DriverDashboard = () => {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [connected_wallet, setConnectedWallet] = React.useState(null);

  console.log(window.ethereum.networkVersion);

  const get_connected_address = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];

    setConnectedWallet(await account);
    console.log(await connected_wallet);
  };

  React.useEffect(() => {
    if (window.ethereum.networkVersion != "1") {
      setConnectBtn("Wrong Network!");
      console.log("no");
    } else if (connected_wallet != null) {
      setConnectBtn("Disconnect");
    }
  }, [connect_btn_state]);

  return (
    <>
      <button
        onClick={get_connected_address}
        style={{
          marginTop: "2rem",
          backgroundColor: "red",
          border: 0,
          height: "3rem",
          width: "auto",
          borderRadius: ".2rem",
          color: "white",
          boxShadow: "1px 1px 7px black",
          position: "absolute",
          right: "1rem",
          top: "0rem",
        }}
      >
        <h4>{connect_btn_state}</h4>
      </button>

      <div className="dash_container">
        <DriverFeed />
      </div>
    </>
  );
};

export default DriverDashboard;
