//home dashboard for a specific user
import React from "react";
import "./App.css";
import NavBarHome from "./components/NavBarHome";
import Dashboard from "./components/Dashboard";

//suggestion: change to firebase
//

//const supabaseUrl = "";
//const supabaseKey =
  
//const supabase = createClient(supabaseUrl, supabaseKey);

const Home = () => {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [postState, setPostState] = React.useState([]);

  //checking validation for user( either with signin info or wallet address )
  /*React.useEffect(async () => {
    let temp_arr = [];
    await supabase
      .from("posts_0x1DDade6675FDeF16b5E9ed3F95e01B9270e149aE")
      .select("*")
      .then((res) => {
        temp_arr.push(res.data);
        setPostState(temp_arr[0]);
      });
  }, []);

  const get_connected_address = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  

   
  };

  const checkForAvax = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = await accounts[0];
    const provider = await detectEthereumProvider();
    if (provider.chainId != "0xa869") {
      setConnectBtn("Wrong Network!");
    }
    if (provider.chainId == "0xa869") {
      setConnectBtn(account.slice(0, 4) + "...." + account.slice(38, 42));
    }
  };

  React.useEffect(async () => {
    checkForAvax();
  }, [connect_btn_state]);

  reload page after rpc chain
  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });*/

  const Post = postState.map((item) => (
    <li
      style={{
        borderBottom: "1px dotted grey",
        marginBottom: "2rem",
        width: "20rem",
      }}
      key={item.id}
    >
      {item.post}{" "}
      <span style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ color: "#0099ff", margin: "none", padding: "none" }}>
          status: {item.status}
        </p>
        <a
         /*} onClick={async () => {
            await supabase
              .from("posts_0x1DDade6675FDeF16b5E9ed3F95e01B9270e149aE")
              .delete()
              .match({ id: item.id });
            window.location.reload();
          }*/
          href="#"
          style={{ marginLeft: "1rem", color: "red", marginBottom: "1rem" }}
        >
          delete
        </a>
        <a
        
          href="#"
          style={{ marginLeft: "1rem", color: "#0099ff", marginBottom: "1rem" }}
        >
          completed
        </a>
      </span>
    </li>
  ));
  
  return (
    <>
      <NavBarHome />
   

      <div className="main_container">
        <Dashboard/>
        

        
      </div>
    </>
  );
};

export default Home;
