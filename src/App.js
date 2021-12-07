import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import Cancel from "./Cancel";
import About from "./About";

function App() {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [connected_wallet, setConnectedWallet] = React.useState(null);

  const get_connected_address = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];

    setConnectedWallet(await account);
    console.log(await connected_wallet);
  };

  React.useEffect(async () => {
    if (window.ethereum.networkVersion != "1") {
      setConnectBtn("Wrong Network!");
    } else if (connected_wallet != null) {
      setConnectBtn("Disconnect");
    }
  }, [connect_btn_state]);

  return (
    <div className="App">
      <button className="btn1" onClick={get_connected_address}>
        <h4>{connect_btn_state}</h4>
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
