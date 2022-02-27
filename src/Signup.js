import React from "react";
import "./App.css";
import NavBarHome from "./components/NavBarHome";
import Dashboard from "./components/Dashboard";
import {Link} from "react-router-dom";

//uncomment and fill out credentials to intergrate with supabase
//const supabaseUrl = "";
//const supabaseKey =

//const supabase = createClient(supabaseUrl, supabaseKey);

const Signup = () => {
  const [connect_btn_state, setConnectBtn] = React.useState("Connect Wallet");
  const [postState, setPostState] = React.useState([]);

  //getting posts
  /*React.useEffect(async () => {
    let temp_arr = [];
    await supabase
      .from("")
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


  //metamask intergration

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

  checking for chainID state

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

  const styles = {
    lists: {
      margin: "1rem 2rem",
      fontWeight: "bold",
      fontSize: "12px",
    },
    inputs: { marginTop: "2rem", borderTop: 0, borderLeft: 0, borderRight: 0 },
  };
  return (
    <div className="main_container">
      <div
        style={{
          width: "50vw",
          height: "auto",
          boxShadow: "1px 3px 7px grey",
          borderRadius: ".5rem",
          marginTop: "6rem",
        }}
      >
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input style={styles.inputs} placeholder="Youtube Channel ID" />
            <input style={styles.inputs} placeholder="Email" />
            <input style={styles.inputs} placeholder="Password" />
            <input style={styles.inputs} placeholder="Confirm Password" />
            <span>
              <input type="checkbox" style={styles.inputs} />{" "}
              <label style={{ fontSize: "10px" }}>
                check to receive post notifications
              </label>
            </span>
            <Link to="/home">
              <button id="btn" style={{ margin: "2rem 0REM" }}>
                Signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
