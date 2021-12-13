import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import Cancel from "./Cancel";
import About from "./About";
import PageBlocker from "../src/components/PageBlocker";
import detectEthereumProvider from "@metamask/detect-provider";

function App() {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [connected_wallet, setConnectedWallet] = React.useState(null);
  const [home_state, setHomeState] = React.useState(<Home/>);

  const get_connected_address = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];

    setConnectedWallet(await account);
  };

  const checkForAvax = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];
    const provider = await detectEthereumProvider();
    if (provider.chainId != "0xa869") {
      setConnectBtn("Wrong Network!");
      setHomeState(<PageBlocker/>)
      console.log(provider.chainId);
    }
    if (provider.chainId == "0xa869") {
      setConnectBtn(account.slice(0, 4) + "...." + account.slice(38, 42));
    }
  };

  React.useEffect(async () => {
    checkForAvax();
  }, [connect_btn_state]);

  /*reload page after rpc chain*/
  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
    
  });

  return (
    <div className="App">
      <button className="btn1" onClick={get_connected_address}>
        <h4>{connect_btn_state}</h4>
      </button>
      <Routes>
        <Route path="/" element={home_state} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
