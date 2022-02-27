import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import WelcomePage from "./WelcomePage";
import Signup from "./Signup";
import Settings from "./Settings";
import ReportPage from "./settings/ReportPage";


//add context to save code when getting address

export const UserContext = React.createContext();

function App() {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [home_state, setHomeState] = React.useState(<Home />);


  {/*const checkForAvax = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];
    setMetaAccount(account);
    const provider = await detectEthereumProvider();
    if (provider.chainId !== "0xa869") {
      setConnectBtn("Wrong Network!");
      setHomeState(<PageBlocker />);
    }
    if (provider.chainId === "0xa869") {
      setConnectBtn(account.slice(0, 4) + "...." + account.slice(38, 42));
    }
  };

  React.useEffect(() => {
    checkForAvax();
  }, [connect_btn_state]);

  /*reload page after rpc chain
  window.ethereum.on("chainChanged",( chainId) => {
    window.location.reload();
  });*/
}
  return (
    <UserContext.Provider >
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<ReportPage />} />
       
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
